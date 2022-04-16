const express = require("express");
const router = express.Router();

const chatControl = require("../controllers/chat");

router.get("/chat", chatControl.chat );

module.exports = router;