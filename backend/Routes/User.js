const express = require("express");
const Router = express.Router();
const authenticateUser = require("../middlewares/auth");
const {
  handleUserSignup,
  handleUserSignin,
  handleUserUpdate,
  handleUserFilter,
} = require("../Controllers/User");

Router.post("/signup", handleUserSignup);
Router.post("/signin", handleUserSignin);
Router.put("/update", authenticateUser, handleUserUpdate);
Router.get("/bulk", handleUserFilter);
module.exports = Router;
