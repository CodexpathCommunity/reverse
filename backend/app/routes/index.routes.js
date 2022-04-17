const express = require("express");

const authRoute = require("./auth.routes");
const userRoute = require("./user.routes");
const chatRoute = require("./chat.routes");
const conversationsRoute = require("./conversations.routes");

const router = express.Router();

//MOUNT ROUTE
router.use("/users", userRoute);
router.use("/chat", chatRoute);
router.use("/auth", authRoute);
router.use("/conversations", conversationsRoute);

module.exports = router;
