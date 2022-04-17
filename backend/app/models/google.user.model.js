const mongoose = require("mongoose");

const GoogleUser = mongoose.model(
  "GoogleUser",
  new mongoose.Schema(
    {
      displayName: String,
      email: String,
      photoUrl: String,
      uid: String,
    },
    {
      timestamps: true,
    }
  )
);

module.exports = GoogleUser;
