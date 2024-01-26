const mongoose = require("mongoose");
const Account = require("../Models/Account");
const { findOne } = require("../Models/User");
const { use } = require("../Routes/User");
async function handleGetAccountBalance(req, res) {
  const userid = req.user;
  const accountInDb = await Account.find({ userid });
  const balance = accountInDb[0].balance;
  res.status(200).json({ balance });
  console.log(accountInDb);
}

async function handleTransferBalance(req, res) {
  const userid = req.user;
  const { to, amount } = req.body;
  const myAccount = await Account.findOne({ userid });
  if (myAccount.balance < amount) {
    res.status(403).json({ message: "Insufficent Balance" });
  }
  const toAccount = await Account.findOne({ userid: to });

  if (!toAccount) {
    res.status(404).json({ message: "Receiving User doesn't exists!!" });
  }

  await Account.updateOne(
    {
      userid,
    },
    {
      $inc: {
        balance: -amount,
      },
    },
  );

  await Account.updateOne(
    {
      userid: to,
    },
    {
      $inc: {
        balance: amount,
      },
    },
  );

  res.json({
    message: "Transfer successful",
  });
}

module.exports = { handleGetAccountBalance, handleTransferBalance };
