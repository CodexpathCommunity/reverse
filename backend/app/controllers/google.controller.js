const GoogleUser = require("../models/google.user.model");

//create user
exports.createUser = async (req, res) => {
  const { displayName, email, photoUrl, uid } = req.body;
  const user = await GoogleUser.findOne({ uid });
  if (user) {
    return res.status(200).send(user);
  }
  const newUser = new GoogleUser({
    displayName,
    email,
    photoUrl,
    uid,
  });
  await newUser.save();
  return res.status(200).send(newUser);
};
