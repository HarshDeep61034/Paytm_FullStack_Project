const express = require("express");
const Router = express.Router();
const { handleUserSignup } = require("../Controllers/User");
Router.post("/signup", handleUserSignup);

module.exports = Router;
