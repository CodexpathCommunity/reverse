const { findAllUserService } = require("../services/user.service");

exports.findAllUsers = async (req, res) => {
  const result = await findAllUserService(req.params.id);
  res.status(result.statusCode).json(result.data);
};
