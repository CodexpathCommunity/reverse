const express = require("express");
const router = express.Router();

const {
  addNewMessage,
  getConversationMessages,
} = require("../controllers/message.controller");

router.post("/", addNewMessage);
router.get("/conversationId", getConversationMessages);

module.exports = router;
