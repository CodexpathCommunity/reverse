const sse = require("../../sse");
const {
  createConversationService,
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
