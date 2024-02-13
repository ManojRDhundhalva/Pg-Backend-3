const { Router } = require("express");
const controller = require("../controllers/profile");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyuser");

const router = Router();

router.post("/:id", verifyTokenAndAuthorization, controller.updateProfile);
router.get("/:id", verifyTokenAndAuthorization, controller.getProfile);


module.exports = router;
