const mongoose = require('mongoose');

const types = {
  USER: 'user',
  ADMIN: 'admin',
};

const userSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true, unique: true },
  userType: {
    type: String,
    default: types.USER,
    enum: [types.USER, types.ADMIN],
  },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  firstName: String,
  lastName: String,
  dateJoined: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  bio: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
