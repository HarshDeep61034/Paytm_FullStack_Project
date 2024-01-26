const { v4: uuidv4 } = require("uuid");

function generateUsername(firstName, lastName) {
  const string = uuidv4().slice(0, 5);
  const username =
    firstName.toLowerCase() + lastName.toLowerCase() + "@" + string;
  return username;
}

module.exports = { generateUsername };
