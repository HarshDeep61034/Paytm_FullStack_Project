const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtkey = process.env.JWT_SECRET;
function authenticateUser(req, res, next) {
  const { authorization } = req.headers;
  let token = "";
  if (authorization === undefined) {
    token = req.cookies.token;
    console.log("bhenchod");
  } else {
    const TokenArray = authorization.split(" ");

    console.log(TokenArray);
    token = TokenArray[1];
  }

  try {
    const decoded = jwt.verify(token, jwtkey);
    req.user = decoded.username;
    next();
  } catch (error) {
    console.log("PAKDA GAYA");
    res.status(401).json({ message: "Invalid Cookie Signin again!!" });
  }
}
module.exports = authenticateUser;
