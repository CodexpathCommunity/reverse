const express = require("express");
const router = express.Router();

const {
  createConversation,
} = require("../controllers/conversations.controller");

router.post("/", createConversation);

module.exports = router;
