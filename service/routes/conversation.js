const express = require('express');
const conversationRouter = express.Router();

const conversationController = require('../controllers/conversationController');
const conversation = require('../models/conversations');

conversationRouter.route('/:id')
    .get((req, res, next)=>{
        conversation.find(req.params.id, (err,conversation)=>{
            if (err){next(err)}
            // found the conversation
            else if(products){res.send(conversation)}
            else{res.sendStatus(404)}
        })
    })

    .post((req, res, next)=>{
        const search =
    })