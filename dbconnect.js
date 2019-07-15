const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb://gurpreet:sparx1234@ds019806.mlab.com:19806/chat_application";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
