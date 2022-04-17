const express = require("express");
const router = express.Router();

const {
  createConversation,
  updateConversation,
  getConversationById,
  getUserConversations,
  matchConversations,
} = require("../controllers/conversations.controller");

// create a conversation
router.post("/", createConversation);
// update conversaion
router.put("/update/:id", updateConversation);
//get conversation by id
router.get("/read/:id", getConversationById);
// get users conversation
router.get("/user/:id", getUserConversations);
// find conversation between two people
router.get("/match/:firstUserId/:secondUserId", matchConversations);

module.exports = router;
