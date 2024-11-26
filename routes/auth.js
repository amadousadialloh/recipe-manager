const express = require("express");
const router = express.Router();
const authUser = require("../controllers/auth");

router.post("/sign-up", authUser.userSignUp);
router.post("/sign-in", authUser.userSignIn);
router.get("/sign-in", authUser.signInPage);
router.get("/sign-up", authUser.signUpPage);

module.exports = router;
