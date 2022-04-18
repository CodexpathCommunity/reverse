const Message = require("../models/message");

let successOptions = {
  error: false,
  message: "success",
  statusCode: 200,
};

let errorOptions = {
  error: true,
  message: "Sorry an error occurred",
  statusCode: 500,
};

const createMessageService = async (message) => {
  const newMessage = new Message(message);

  try {
    const _message = await newMessage.save();
    return {
      data: _message,
      ...successOptions,
    };
  } catch (error) {
    return {
      data: {},
      ...errorOptions,
    };
  }
};
