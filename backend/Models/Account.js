const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  balance: Number,
});

const Account = mongoose.model("accounts", accountSchema);

module.exports = Account;
