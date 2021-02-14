const mongoose = require('mongoose');

const types = {
  USER: "user",
  ADMIN: "admin",
}

const userSchema = new mongoose.Schema({
    userType: {
      type: String,
      default: types.USER,
      enum:[types.USER, types.ADMIN]},
    userName:  {type: String, required: true},
    email: {type: String, required: true},
    firstName: String,
    lastName: String,
    dateJoined: { type: Date, default: Date.now },
    active: {type: Boolean, required: true},
    bio: String
  });

const User = mongoose.model('user', userSchema);

module.exports = User;