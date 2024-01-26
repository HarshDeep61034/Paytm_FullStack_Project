const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./connect");
const User = require("./Models/User");
const userRouter = require("./Routes/User");

//Connecting to DB
connect().then(() => console.log("connected to Mongo DB"));

//LIBRARY MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ data: "hello sample data" });
});
//CUSTOM MIDDLEWARES
app.use("/api/v1/user", userRouter);

app.listen(3000, () => console.log("listening at PORT 3000"));
