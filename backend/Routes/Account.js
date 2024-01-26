const express = require("express");
const Router = express.Router();
const {
  handleGetAccountBalance,
  handleTransferBalance,
} = require("../Controllers/Account");
const authenticateUser = require("../middlewares/auth");
Router.get("/balance", authenticateUser, handleGetAccountBalance);
Router.post("/transfer", authenticateUser, handleTransferBalance);
module.exports = Router;
