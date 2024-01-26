const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function handleUserSignup(req, res) {
  const { firstName, lastName, password, email } = req.body;
  const string = uuidv4().slice(0, 5);
  const username = firstName.toLowerCase() + lastName.toLowerCase() + string;
  console.log(username);
  bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log(hash);
  });
}

module.exports = { handleUserSignup };
