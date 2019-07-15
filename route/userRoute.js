const express = require("express");
const bodyParser = require("body-parser");
const connectdb = require("../dbconnect");
const Users = require("../models/User");

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  connectdb.then(db => {
    // let data = Users.find({ message: "Anonymous" });
    Users.find({}).then(user => {
      res.json(user);
    });
  });
});

module.exports = router;
