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
} = require("../controllers/auth.controller");

const googleController = require("../controllers/google.controller");

router.post(
  "/signup",
  [checkDuplicateUsernameOrEmail, checkRolesExisted],
  signup
);
router.post("/signin", signin);

router.post("/refreshtoken", refreshToken);

router.post("/google", googleController.createUser);

module.exports = router;
