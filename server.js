const express = require("express");
const server = express();
const mongoose = require("mongoose");
require("dotenv").config();
const session = require("express-session");
const methodOverride = require("method-override");
const recipeRoute = require("./routes/recipe");
const authRoute = require("./routes/auth");
server.use(express.urlencoded({ extended: true }));
const PORT = 2000;
server.use(express.static("public"));
server.use(methodOverride("_method"));
server.get("/", (req, res) => {
  res.render("index.ejs");
});
server.get("/homeIndex", (req, res) => {
  res.render("homeIndex.ejs");
});

server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
server.use("/recipes", recipeRoute);
server.use("/auth", authRoute);
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("mongoose connected");
});

server.listen(PORT);
