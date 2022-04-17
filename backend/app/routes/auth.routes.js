const express = require("express");
const router = express.Router();
const {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} = require("../middleware/verifySignUp.js");
const {
  signup,
  signin,
  refreshToken,
  createUser,
} = require("../controllers/auth.controller");

router.post(
  "/signup",
  [checkDuplicateUsernameOrEmail, checkRolesExisted],
  signup
);
router.post("/signin", signin);

router.post("/refreshtoken", refreshToken);

router.post("/google", createUser);

module.exports = router;
