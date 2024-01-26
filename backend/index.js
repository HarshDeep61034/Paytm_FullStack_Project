const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connect = require("./connect");
const User = require("./Models/User");
app.use(bodyParser.urlencoded({ extended: false }));
const userRouter = require("./Routes/User");
connect().then(() => console.log("connected to Mongo DB"));
app.use("/user", userRouter);

app.listen(3000, () => console.log("listening at PORT 3000"));
