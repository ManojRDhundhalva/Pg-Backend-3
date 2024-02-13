const pool = require("../db");
const queries = require("../queries/profile");

const updateProfile = async (req, resp) => {
    
    const {
        user_first_name,
        user_middle_name,
        user_last_name,
        user_gender,
        user_city,
        user_state,
        user_country,
        user_mobile_number } = req.body;

    try {
        const checkResults = await pool.query(queries.userExist, [req.params.id]);

        let InsertOrUpdate = '';
        if (checkResults.rows.length === 0) {
            InsertOrUpdate = queries.insertAll;
        } else {
            InsertOrUpdate = queries.updateAll;
        }
        try {

            const results = await pool.query(InsertOrUpdate, [
                user_first_name,
                user_middle_name,
                user_last_name,
                user_gender,
                user_city,
                user_state,
                user_country,
                Number(user_mobile_number),
                Number(req.params.id)
            ]);
            resp.json(results);

        } catch (err) {
            console.log(err);
            resp.status(404).json("err");
        }

    } catch (err) {
        console.log(err);
        resp.status(500).json("Internal Server ERR");
    }
}

const getProfile = async (req, resp) => {
    try {
        const results = await pool.query(queries.getUserDetails, [req.params.id]);
        if (results.rows.length !== 1) {
            return resp.status(404).json("User not found");
        }
        resp.status(200).json(results.rows[0]);
    } catch (err) {
        resp.status(500).json("Internal Server ERR");
    }
}

module.exports = {
    updateProfile,
    getProfile,
}