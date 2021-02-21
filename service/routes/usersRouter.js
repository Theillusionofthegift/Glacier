const express = require('express');
const usersRouter = express.Router();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const User = require('../models/users');
const userController = require('../controllers/userController');

// A middleware function that checks to see if a token is valid for us.
const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-0rn1lib.us.auth0.com/',
  }),
  audience: 'glacier.com',
  issuer: 'https://dev-0rn1lib.us.auth0.com/',
  algorithms: ['RS256'],
});
usersRouter.use(jwtCheck);

usersRouter.route('/')
  .get((req, res, next) => {
    User.find({}, (err, users) => {
      if (err) {
        next('Something Went Wrong!');
      } else { res.send(users); }
    });
  })

  .post(userController.createUser);

usersRouter.route('/:id')
  .get((req, res, next) => {
    User.findById(req.params.id, (err, users) => {
      if (err) { next(err); }
      else if (users) { res.send(users); }
      else { res.sendStatus(404); }
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
