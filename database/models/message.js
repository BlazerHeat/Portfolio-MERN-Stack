const mongoose = require("mongoose");

const Message = new mongoose.Schema({
  name: String,
  message: String,
});

module.exports = mongoose.model("Messages", Message);
