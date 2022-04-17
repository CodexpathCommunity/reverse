const { createUserService } = require("../services/user.service");
const sse = require("../../sse");

//create user
exports.createUser = async (req, res) => {
  const result = await createUserService(req.body);
  res.status(result.statusCode).json(result.data);
  if (!result.error) {
    //   emit post event
    try {
      sse.send(result.data, `users`);
    } catch (error) {
      console.log(error);
    }
  }
};
