const User = require('../models/users');

exports.createUser = (req, res, next) => {
  // make sure user name isn't blank
  if (req.body.userName.trim().length === 0) {
    res.status(400).send({ error: 'User name cannot be blank' });
  }

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // make sure email isn't blank
  if (req.body.email.trim().length === 0) {
    res.status(400).send({ error: 'Email cannot be blank' });
  } else if (!emailIsValid(req.body.email.trim())) {
    res.status(400).send({ error: 'Please enter a valid email address' });
  } else {
    const user = {
      auth0Id: req.body.auth0Id,
      userName: req.body.userName,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
    };

    User.create(user)
      .then((user1) => {
        res.send({ userId: user1._id });
      })
      .catch((err) => {
        next(err);
      });
  }
};

exports.updateUser = (req, res, next) => {
  const options = { validate: true };
  User.find({ auth0Id: req.params.id }, options, (err, id) => {
    if (err) { next(err); }
    User.findByIdAndUpdate(id, req.body, options, (err, user) => {
      if (err) {
        next(err);
      } else if (user) {
        res.send({ userId: user._id });
      } else {
        res.sendStatus(404);
      }
    });
  });
};

exports.searchUser = (req, res, next) => {
  if (req.query.userName) {
    User.find({ userName: req.query.userName }, (err, search) => {
      if (err) {
        next('Something Went Wrong!');
      } else {
        res.send(search);
      }
    });
  } else {
    User.find({ }, (err, products) => {
      if (err) { next('Something Went Wrong!'); } else { res.send(products); }
    });
  }
};
