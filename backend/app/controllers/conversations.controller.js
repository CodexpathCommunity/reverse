const sse = require("../../sse");
const {
  createConversationService,
  updateConversationService,
  getConversationByIdService,
  getUserConversationService,
  matchConversationsService,
} = require("../services/conversations.service");
//conversation route
exports.createConversation = async (req, res) => {
  const result = await createConversationService(req);
  res.status(result.statusCode).json(result.data);
  if (!result.error) {
    //   emit post event
    try {
      sse.send(result.data, `conversation_${result.data.lastReciever}`);
    } catch (error) {
      console.log(error);
    }
  }
};

exports.updateConversation = async (req, res) => {
  const result = await updateConversationService(req);
  res.status(result.statusCode).json(result.data);
  if (!result.error) {
    //   emit post event
    try {
      sse.send(result.data, `conversation_${result.data.lastReciever}`);
    } catch (error) {
      console.log(error);
    }
  }
};

exports.getConversationById = async (req, res) => {
  const result = await getConversationByIdService(req);
  res.status(result.statusCode).json(result.data);
};

exports.getUserConversations = async (req, res) => {
  const result = await getUserConversationService(req);
  res.status(result.statusCode).json(result.data);
};

exports.matchConversations = async (req, res) => {
  const result = await matchConversationsService(req);
  res.status(result.statusCode).json(result.data);
};
