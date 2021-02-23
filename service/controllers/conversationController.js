const Conversation = require('../models/conversations');

exports.createConversation = (req, res, next) => {
  // Check to see if conversation has users in the users array
  if (req.body.users.length === 0) {
    res.status(400).send({ error: 'Conversation must have users!!' });
  }

  const conversation = {
    users: req.body.users,
    messages: {},
  };

  Conversation.create(conversation)
    .then((convo) => {
      Conversation.findById(req.params.id, (err, conversation) => {
        if (err) { next(err); }
        // found the conversation
        if (conversation) { res.send(conversation); }
        else { res.sendStatus(404); }
      })
        .catch((err) => {
          next(err);
        });
    });
};
