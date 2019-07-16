const express = require("express");
const bodyParser = require("body-parser");
const connectdb = require("../dbconnect");
const Users = require("../models/User");
const path = require('path');

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  connectdb.then(db => {
    // let data = Users.find({ message: "Anonymous" });
    Users.find({}).then(user => {
      res.json(user);
    });

    Users.create({
      name: req.body.name
      },
      function (err, user) {
          if (err) return res.status(500).json({"message": "There was a problem adding the information to the database."});
          res.json(user);
      });
  });

  res.sendFile(path.resolve('./public/user-list.html'))
});

module.exports = router;
