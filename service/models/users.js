const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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