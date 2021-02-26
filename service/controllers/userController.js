const User = require('../models/users');

exports.createUser = (req, res, next) => {
  // make sure user name isn't blank
  if (req.body.userName.trim().length === 0) {
    res.status(400).send({ error: 'User name cannot be blank' });
  }

  const auth = req.body.auth0Id.split(' ');

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
      auth0Id: auth[2],
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
