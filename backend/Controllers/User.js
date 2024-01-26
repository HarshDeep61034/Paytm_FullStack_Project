const { z } = require("zod");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtkey = process.env.JWT_SECRET;
const { generateUsername } = require("../utils/utils.js");
const User = require("../Models/User.js");

const userSchemaZod = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string(),
  createdOn: z.string().datetime(),
});

async function handleUserSignup(req, res) {
  const { firstName, lastName, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const username = generateUsername(firstName, lastName);
  const userObject = {
    username,
    email,
    firstName,
    lastName,
    password: hashedPassword,
    createdOn: Date.now(),
  };
  console.log(userSchemaZod.safeParse(userObject));
  // User.create({
  //   username,
  //   email,
  //   password: hashedPassword,
  //   firstName,
  //   lastName,
  //   createdOn: Date.now(),
  // });
  //
  const userAlreadyExists = (await User.exists({ email })) !== null;
  if (!userAlreadyExists) {
    jwt.sign({ username }, jwtkey, (err, token) => {
      res.json({
        message: "User created successfully",
        token,
      });
    });
  } else {
    res.json({
      message: "Email already taken",
    });
  }
}

module.exports = { handleUserSignup };
