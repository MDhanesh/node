const express = require("express");
const dotenv = require("dotenv");
const employeeRouter = require("./router/employeeRouter");
const registerRouter = require("./router/registerRouter");
const mongo = require("./connect");
dotenv.config();
mongo.connect();
//console.log(mongo);

//
const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("came first out");
  var auth = {
    authorised: true,
  };
  if (auth.authorised) {
    console.log("Authorised");
    next();
  } else {
    console.log("Not Authorised");
    res.send({ msg: "Not Authorised" });
  }
});
app.use("/register", registerRouter);
app.use("/employees", employeeRouter);

app.listen(process.env.PORT);
