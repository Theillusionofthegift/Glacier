const Conversation = require('../models/conversations');

exports.createConversation = (req, res, next) => {

  const conversation = {
    users: [req.query.seller, req.query.buyer],
    messages: {},
  };

  Conversation.create(conversation)
    .then((convo) => {
      Conversation.findById( convo, (err, conversation) => {
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

exports.findConversation = (req, res, next) => {
  const options = { validate: true }
  Conversation.find({ users: [req.query.seller, req.query.buyer] }, options, (err, convo) => {
    if (err) { next(err); }
    else if (convo.length > 0) {
      Conversation.findById(convo, (err, conversation) => {
        if (err) { next(err); }
        // found the conversation
        if (conversation) { res.send(conversation); }
        else { res.sendStatus(404); }
      });
    } else {
      next();
    }
  });
};
