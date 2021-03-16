/**
 * Database initialization script. Run `node ./initDB.js`. Does not delete
 * existing data.
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const mockData = require('./mockData');

const Product = require('../models/product');
const User = require('../models/users');

mockData.productList.forEach((user) => {
  Product.create(user).catch((err) => console.log(err));
});

mockData.userList.forEach((user) => {
  User.create(user).catch((err) => console.log(err));
});


const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.qkr4a.mongodb.net/Glacier?retryWrites=true&w=majority`;
mongoose;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log('Connected successfully'); },
    (err) => { console.log(`Connection failed with ${err}`); },
  );
