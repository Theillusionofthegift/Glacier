const dateFns = require("date-fns");

const Conversation = require("../models/conversations");

exports.createConversation=(req, res, next)=>{
    
    if(req.body.message==0){
        res.status(400).send({error:"Do not send EMPTY message!!"})
    }

    const conversation = {
        user: req.body.user,
        message: req.body.message,
    };

    Conversation.create(conversation)
        .then((conversation)=>{
            res.send({conversationId: conversation._id});
        })
        .catch((err)=>{
            console.log(err);
            next(err);
        });
};