const {
  createMessageService,
  getConversationMessagesService,
} = require("../services/message.service");

//create message
exports.addNewMessage = async (req, res) => {
  const result = await createMessageService(req.body);
  res.status(result.statusCode).json(result.data);
};

exports.getConversationMessages = async (req, res) => {
  const result = await getConversationMessagesService(req);
  res.status(result.statusCode).json(result.data);
};
