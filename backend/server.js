const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./app/config/db.config");
const { Chat } = require("./app/models/chats");

// load dotenv file
dotenv.config({ path: "app/config/config.env" });

const rootRoute = require("./app/routes/index.routes");

// connection to db
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ---------- Handle Cors ---------- */
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-type,X-auth-token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//MOUNT ROUTE
app.use("/api/v1", rootRoute);

const PORT = process.env.NODE_ENV === "production" ? 8080 : 5000;

const server = require("http").createServer(app);
const io = require("socket.io")(server);

// socket.io connection
io.on("connection", (socket) => {
  socket.on("Input Chat Message", (msg) => {
    try {
      let chat = new Chat({
        message: msg.chatMsg,
        sender: msg.userId,
        type: msg.type,
      });

      chat.save((err, doc) => {
        //console.log(doc)
        if (err) return res.json({ success: false, err });

        Chat.find({ _id: doc._id })
          .populate("sender")
          .exec((err, doc) => {
            return io.emit("Output Chat Message", doc);
          });
      });
    } catch (error) {
      console.error(error);
    }
  });
});

server.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// handle unhanled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(err);
  // close server

  server.close(() => process.exit(1));
});
