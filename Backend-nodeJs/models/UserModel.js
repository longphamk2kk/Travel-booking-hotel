const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  userInfo: {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    address: String,
    dateOfBirth: Date,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
