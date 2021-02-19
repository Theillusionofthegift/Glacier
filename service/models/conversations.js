const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  user: String,
  timestamp: { type: Date, default: Date.now },
  message: String,
});

const conversationSchema = new mongoose.Schema({
  users: [String],
  messages: [chatMessageSchema],
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
