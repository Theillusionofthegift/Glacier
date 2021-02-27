const express = require('express');

const usersRouter = express.Router();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const User = require('../models/users');
const userController = require('../controllers/userController');

require('dotenv').config({ path: '../.env' });

const domain = process.env.REACT_APP_AUTH_0_DOMAIN;
const audience = process.env.REACT_APP_AUTH_0_AUDIENCE;
const issuer = process.env.REACT_APP_AUTH_0_ISSUER;

usersRouter.route('/')
  .get((req, res, next) => {
    User.find({}, (err, users) => {
      if (err) {
        next('Something Went Wrong!');
      } else { res.send(users); }
    });
  });

usersRouter.route('/:id')
  .get((req, res, next) => {
    const options = { validate: true };
    User.find({ auth0Id: req.params.id }, options, (err, id) => {
      if (err) { next(err); }
      User.findById(id, (err, user) => {
        if (err) { next(err); } else if (user) { res.send(user); } else { res.sendStatus(404); }
      });
    });
  })

  .put((req, res, next) => {
    const options = { validate: true };
    User.find({ auth0Id: req.params.id }, options, (err, id) => {
      if (err) { next(err); }
      User.findByIdAndUpdate(id, req.body, options, (err, user) => {
        if (err) { next(err); } else if (user) { res.send(user); } else { res.sendStatus(404); }
      });
    });
  })

  .delete((req, res, next) => {
    const options = { validate: true };
    User.find({ auth0Id: req.params.id }, options, (err, id) => {
      if (err) { next(err); }
      User.findByIdAndDelete(id, (err, user) => {
        if (err) { next(err); } else if (user) { res.send(user); } else { res.sendStatus(404); }
      });
    });
  });

// A middleware function that checks to see if a token is valid for use.
const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),
  audience: `${audience}`,
  issuer: `${issuer}`,
  algorithms: ['RS256'],
});
usersRouter.use(jwtCheck);

// after the JWT middleware runs, the request object is decorated with user information
usersRouter.route('/')
  .post((req, res, next) => {
    const { permissions, sub } = req.user;
    console.log(sub);
    if (req.body.auth0Id === req.user.sub || permissions.includes('manage:users')) {
      next();
    } else {
      // user does not have admin priviledges
      res.sendStatus(403);
    }
  }, userController.createUser);

usersRouter.route('/:id')

  .put((req, res, next) => {
    const { permissions } = req.user;
    if (req.body.auth0Id === req.user.sub || permissions.includes('manage:users')) {
      const options = { validate: true };
      User.find({ auth0Id: req.params.id }, (err, id) => {
        if (err) {
          next('Something Went Wrong!');
        } else {
          User.findByIdAndUpdate(id, options, (err, user) => {
            res.send(user);
          });
        }
      });
    } else {
      // user is not owner of the account or does not have admin priviledges
      res.sendStatus(403);
    }
  });

module.exports = usersRouter;
