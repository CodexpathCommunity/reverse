const express = require("express");
const router = express.Router();
const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/user.controller");

router.get("/all", controller.findAllUser);

module.exports = router;
