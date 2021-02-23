const express = require('express');

const conversationContoller = require('../controllers/conversationController');

const conversationRouter = express.Router();
const Conversation = require('../models/conversations');

conversationRouter.route('/?')
  .get(conversationContoller.findConversation, conversationContoller.createConversation);

conversationRouter.route('/:id')
  // find Conversation by _id
  .get((req, res, next) => {
    Conversation.findById(req.params.id, (err, conversation) => {
      if (err) { next(err); }
      // found the conversation
      if (conversation) { res.send(conversation); }
      else { res.sendStatus(404); }
    });
  })
  // add new message to the conversation via post.
  .post((req, res, next) => {
    const options = { validate: true };
    Conversation.findById(req.params.id, (err, conversation) => {
      if (err) { next(err); }
      else if (conversation) {
        conversation.messages.push(req.body);
        Conversation.findByIdAndUpdate(conversation._id, conversation, options, (err, convo) => {
          if (err) {
            next('Something Went Wrong!');
          } else {
            res.sendStatus(201);
          }
        });
      } else {
        res.sendStatus(404);
      }
    });
  });

module.exports = conversationRouter;
