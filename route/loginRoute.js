const express = require("express");
const router = express.Router();

const path = require('path');

router.route("/").get((req, res, next) => {
  res.sendFile(path.resolve('public/login.html'));
});

router.route("/").post((req, res, next) => {
  console.log(req.body.username);
  res.send('')
  // username = localStorage.setItem("user", req.body.username);
});

module.exports = router;
