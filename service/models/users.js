const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:  String,
    email: String,
    firstName: String,
    lastName: String,
    dateJoined: { type: Date, default: Date.now },
    active: Boolean,
    bio: String
  });


const User = mongoose.model('user', userSchema);

module.exports = User;