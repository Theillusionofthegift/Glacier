const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  user: String,        
  timestamp: Date,      
  message: String,     
});

const conversationSchema = new mongoose.Schema({
  users: [String],      
  messages: [chatMessageSchema] 
});

const Conversation = mongoose.Model('Conversation', conversationSchema);

module.exports = Conversation;