const mongoose = require("mongoose");

const GoogleUser = mongoose.model(
  "GoogleUser",
  new mongoose.Schema({
    displayName: String,
    email: String,
    photoUrl: String,
    uid: String,
  })
);

module.exports = GoogleUser;
