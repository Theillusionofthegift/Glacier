/** 
 * Database initialization script. Run `node ./initDB.js`. Does not delete
 * existing data.
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const mockData = require('./mockData');

const Transaction = require('../models/transactions');

mockData.transactionList.forEach((transaction) => {
  Transaction.create(transaction).catch(err => console.log(err));
});

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.qkr4a.mongodb.net/Glacier?retryWrites=true&w=majority`;;
mongoose
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log("Connected successfully") },
    (err) => { console.log(`Connection failed with ${err}`) }
  );