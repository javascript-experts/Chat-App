const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    sender: {
      type: String
    }
  }
);

let User = mongoose.model("user", userSchema);

module.exports = User;
