const Conversation = require('../models/conversations');

exports.createConversation = (req, res, next) => {
  // Check to see if conversation has users in the users array
  if (req.body.users.length === 0) {
    res.status(400).send({ error: 'Conversation must have users!!' });
  }

  const conversation = {
    users: req.body.users,
    messages: req.body.messages,
  };

  Conversation.create(conversation)
    .then((convo) => {
      res.send({ conversationId: convo._id });
    })
    .catch((err) => {
      next(err);
    });
};
