const GoogleUser = require("../models/google.user.model");

//create user
const createUserService = async ({ displayName, email, photoUrl, uid }) => {
  try {
    const user = await GoogleUser.findOne({ uid });
    if (user) {
      return {
        data: user,
        error: false,
        message: "success",
        statusCode: 200,
      };
    } else {
      const newUser = new GoogleUser({
        displayName,
        email,
        photoUrl,
        uid,
      });

      const savedUser = await newUser.save();

      return {
        data: savedUser,
        error: false,
        message: "success",
        statusCode: 200,
      };
    }
  } catch (error) {
    return {
      data: {},
      error: true,
      message: "sorry an error occurred",
      statusCode: 500,
    };
  }
};

module.exports = {
  createUserService,
  f,
};
