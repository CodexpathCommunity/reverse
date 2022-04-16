const Chat = require("../models/chats");

exports.chat = async (req, res) => {
    await Chat.find()
    .populate("sender")
    .exec((err, chats) => {
        if(err) return res.status(400).send(err);
        res.status(200).send(chats)
    })
  };