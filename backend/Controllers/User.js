const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtkey = process.env.JWT_SECRET;
const { generateUsername } = require("../utils/utils.js");
const User = require("../Models/User.js");
const Account = require("../Models/Account.js");
const userSchemaZod = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string(),
  createdOn: z.string().datetime(),
});

async function handleUserSignup(req, res) {
  // destructuring body object
  const { firstName, lastName, password, email } = req.body;
  const userAlreadyExists = (await User.exists({ email })) !== null;
  console.log(userAlreadyExists);
  if (userAlreadyExists) {
    res.status(411).json({
      success: false,
      message: "User Already Exists",
    });
  } else {
    // encrypting password
    const hashedPassword = await bcrypt.hash(password, 10);

    // generating username
    const username = generateUsername(firstName, lastName);

    // defined user object for parsing through zod
    const date = new Date().toISOString();
    const userObject = {
      username,
      email,
      firstName,
      lastName,
      password: hashedPassword,
      createdOn: date,
    };

    const inputIsValid = userSchemaZod.safeParse(userObject);

    if (inputIsValid.success) {
      console.log("User Created in DB");

      // creating user in DB
      User.create(inputIsValid.data);
      const money = Math.floor(Math.random() * 10000);
      Account.create({ userid: username, balance: money });
    } else {
      res.status(403).json({ sucess: false, message: "Invalid Inputs" });
    }

    jwt.sign({ username }, jwtkey, (_err, token) => {
      res.cookie("token", token);
      res.status(200).json({
        success: true,
        message: "User created successfully",
        token,
      });
    });
  }
}

async function handleUserSignin(req, res) {
  const { email, password } = req.body;
  const userinDb = await User.findOne({ email });
  const username = userinDb.username;
  const checkPassword = await bcrypt.compare(password, userinDb.password);
  if (checkPassword) {
    jwt.sign({ username }, jwtkey, (_err, token) => {
      res.cookie("token", token);
      res.status(200).json({
        message: "User Authenticated",
        token,
      });
    });
  } else {
    res.status(401).json({ message: "Invalid Password" });
  }
}

const userUpdateSchemaZod = z.object({
  email: z.optional(z.string().email()),
  password: z.string().min(8).optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  oldPassword: z.string(),
});

async function handleUserUpdate(req, res) {
  const username = req.user;
  const userinDb = await User.findOne({ username });
  const { firstName, lastName, password, email, oldPassword } = req.body;
  const checkPassword = await bcrypt.compare(oldPassword, userinDb.password);
  const inputIsValid = userUpdateSchemaZod.safeParse({
    firstName,
    lastName,
    password,
    email,
    oldPassword,
  });

  if (checkPassword) {
    if (inputIsValid.success) {
      const newData = Object.fromEntries(
        Object.entries(inputIsValid.data).filter(
          ([_key, value]) => value !== undefined,
        ),
      );

      const updatedUser = await User.findOneAndUpdate({ username }, newData, {
        new: true,
      });

      res.status(200).json({ message: "User Updated Successfully" });
    } else {
      res.status(422).json({ message: "Invalid Inputs" });
    }
  } else {
    res.status(411).json({ message: "Old Password is Invalid" });
  }
}

async function handleUserFilter(req, res) {
  const filter = req.query.filter;
  const filteredUsers = await User.find({
    $or: [
      {
        firstName: filter,
      },
      {
        lastName: filter,
      },
    ],
  });
  res.status(200).json({ users: filteredUsers });
}
module.exports = {
  handleUserSignup,
  handleUserSignin,
  handleUserUpdate,
  handleUserFilter,
};
