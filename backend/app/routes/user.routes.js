const express = require("express");
const router = express.Router();
const authJwt = require("../middleware/authJwt");
const controller = require("../controllers/user.controller");

router.get("/all", controller.allAccess);

router.get("/user", [authJwt.verifyToken], controller.userBoard);
router.get(
  "/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);

router.get(
  "/mod",
  [authJwt.verifyToken, authJwt.isModerator],
  controller.moderatorBoard
);

module.exports = router;
