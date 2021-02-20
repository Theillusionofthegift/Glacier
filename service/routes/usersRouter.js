const express = require('express');

const usersRouter = express.Router();
const User = require('../models/users');
const userController = require('../controllers/userController');

usersRouter.route('/')
  .get((req, res, next) => {
    User.find({}, (err, users) => {
      if (err) { next('Something Went Wrong!'); } 
      else { res.send(users); }
    });
  })

  .post(userController.createUser);

usersRouter.route('/:id')
  .get((req, res, next) => {
    const options = { validate: true }
    User.find({ auth0Id: req.params.id }, options, (err, id) => {
      if (err) { next(err); }
      User.findById(id, (err, user) => {
        if (err) { next(err); }
        else if (user) { res.send(user); }
        else { res.sendStatus(404); }
      });
    });
  })

  .put((req, res, next) => {
    const options = {validate: true};
    User.findByIdAndUpdate(req.params.id, req.body, options, (err, user) => {
      if (err) { next('Something Went Wrong!'); }
      else {
        User.findById(req.params.id, (err, user) => {
          res.send(user);
        });
      }
    });
  })

  .delete((req, res, next) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
      if (err) { next(err); }
      else if (user) { res.sendStatus(204); }
      else {
        res.status(404).send({ error: `Couldn't find user with that id ${req.params.id}` });
      }
    });
  });

module.exports = usersRouter;
