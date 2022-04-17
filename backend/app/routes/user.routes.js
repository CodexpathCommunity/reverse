const express = require("express");
const router = express.Router();
const authJwt = require("../middleware/authJwt");
const { findAllUsers } = require("../controllers/user.controller");

router.get("/:id", findAllUsers);

module.exports = router;
