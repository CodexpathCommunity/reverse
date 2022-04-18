const sse = require("../../sse");
const {
  createMessageService,
  getConversationMessagesService,
} = require("../services/message.service");

//create message
exports.addNewMessage = async (req, res) => {
  const result = await createMessageService(req.body);
  res.status(result.statusCode).json(result.data);
  if (!result.error) {
    //   emit post event
    try {
      sse.send(result.data, `message_${result.data.reciever}`);
    } catch (error) {
      console.log(error);
    }
  }
};

exports.getConversationMessages = async (req, res) => {
  const result = await getConversationMessagesService(req);
  res.status(result.statusCode).json(result.data);
};
