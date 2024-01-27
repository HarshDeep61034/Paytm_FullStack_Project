const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./connect");
const userRouter = require("./Routes/User");
const accountRouter = require("./Routes/Account");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
//Connecting to DB
connect().then(() => console.log("connected to Mongo DB"));

//LIBRARY MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//CUSTOM MIDDLEWARES
app.use("/api/v1/account", accountRouter);
app.use("/api/v1/user", userRouter);

app.listen(3000, () => console.log("listening at PORT 3000"));
