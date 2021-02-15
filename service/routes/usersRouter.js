const express = require('express');
const userRoutes = express.Router();

const User = require('../models/users')
const userController = require('../controllers/userController')

userRoutes.route('/')
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

userRoutes.route('/:id')
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
                // if user id not found, sent message
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
                res.sendStatus(204);
            } else {
                // if user id not found, send message
                res.status(404).send({error: `Couldn't find user with id ${req.params.id}`};
            }
        })
    });


module.exports = usersRouter;
