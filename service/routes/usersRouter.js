const express = require('express');
const userRoutes = express.Router();

const Data = require('../data/mockData');
const User = require('../models/product')
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
    .put((req, res, next) => 
    {
        const s = Data.userList.filter((param) => {
            return req.params['id'] === param.id;
        })

        if(s.length != 0) 
        {
            //update the user
            res.sendStatus(204);
        }
        else 
        {
            //the user is not found send appropriate status
            res.sendStatus(404);
        }

    })
    .delete((req, res, next) => 
    {
        const s = Data.userList.filter((param) => {
            return req.params['id'] === param.id;
        })

        if(s.length != 0) 
        {
            //if the user is found then delete it
            res.sendStatus(204);
        }
        else 
        {
            res.sendStatus(404);
        }
    });


module.exports = usersRouter;
