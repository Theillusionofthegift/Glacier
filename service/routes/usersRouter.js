const express = require('express');
const usersRouter = express.Router();

const User = require('../models/users')
const userController = require('../controllers/userController')

usersRouter.route('/')
    .get((req, res, next) => {
        User.find({}, (err, users) => {
            if(err) {
                next("Something Went Wrong!")
            } else {
                res.send(users)
            }
        })
    })
    .post(userController.createUser);

usersRouter.route('/:id')
    .get((req, res, next) => {
        User.findById(req.params.id, (err, users) => {
            if(err) {
                next(err)
            } else if (users) {
                // if user id found, return user
                res.send(users)
            } else {
                // user id not found
                res.sendStatus(404) 
            }
        })
    })
    .put((req, res, next) => {
        const options = {validate: true};
        User.findByIdAndUpdate(req.params.id, req.body, options, (err, user) => {
            if(err) {
                // if user id not found, send message
                next('Something Went Wrong!')
            } else {
                // if user id found, send user
                User.findById(req.params.id, (err, user) => {
                    res.send(user)
                })
            }
        })
    })
    .delete((req, res, next) => {
        User.findByIdAndDelete(req.params.id, (err, user) => {
            if(err) {
                next(err)
            } else if (user) {
                // if user id is found, delete user and send status
                res.sendStatus(204);
            } else {
                // if user id not found, send message
                res.status(404).send({error: `Couldn't find user with that id ${req.params.id}`});
            }
        })
    })
module.exports = usersRouter;
