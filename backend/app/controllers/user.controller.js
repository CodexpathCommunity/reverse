const { findAllUserService } = require("../services/user.service");

exports.findAllUser = async (req, res) => {
  const result = await findAllUserService();
  res.status(result.statusCode).json(result.data);
};
