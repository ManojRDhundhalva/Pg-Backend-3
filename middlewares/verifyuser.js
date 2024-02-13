const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, resp, next) => {

    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) resp.status(403).json("Token is not valid!");
            req.user = user;
            next();
        })
    } else {
        return resp.status(404).json("You are not authenticated!");
    }
}

const verifyTokenAndAuthorization = (req, resp, next) => {

    verifyToken(req, resp, () => {
        if (Number(req.user.id) === Number(req.params.id)) {
            next();
        } else {
            resp.status(404).json("You are not allowed to do that!");
        }
    })
}

module.exports = {
    verifyTokenAndAuthorization,
    verifyToken,
}