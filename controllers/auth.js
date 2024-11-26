const bcrypt = require("bcrypt");
const User = require("../models/users/user.js");

const signInPage = async (req, res) => {
  res.render("auth/signIn.ejs");
};

const signUpPage = async (req, res) => {
  res.render("auth/signUp.ejs");
};

const userSignIn = async (req, res) => {
  const existedUser = await User.findOne({ username: req.body.username });
  if (!existedUser) {
    return res.send("Login failed, please try again.");
  }
  const validPassword = bcrypt.compareSync(
    req.body.password,
    existedUser.password
  );
  if (!validPassword) {
    res.send("Login failed. please try again!");
  }
  req.session.user = {
    username: existedUser.username,
  };
};

const userSignUp = async (req, res, next) => {
  try {
    const existedUser = await User.findOne({ username: req.body.username });
    if (existedUser) {
      return res.send("Username already taken!");
    }
    if (req.body.password !== req.body.confirmPassword) {
      return res.send("Passords should match");
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    res.redirect("/");
  } catch (error) {
    return res.status(500).send("Error creating user");
  }
};

module.exports = {
  userSignUp,
  signInPage,
  signUpPage,
  userSignIn,
};
