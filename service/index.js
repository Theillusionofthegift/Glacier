// import express from 'express'
const express = require('express');

const app = express();
const port = 4000;

require('dotenv').config({ path: './.env' });

const morgan = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');
const productsRouter = require('./routes/productsRouter');
const transRouter = require('./routes/transactionsRouter');
const usersRouter = require('./routes/usersRouter');
const conversationRouter = require('./routes/conversationRouter');
// const uploadRouter = require('./routes/uploadRouter');

// Setting up mongoose connection

console.log('Now the value for FOO is:', process.env.USER);
console.log('Now the value for FOO is:', process.env.PASS);

const user = process.env.USER;
const password = process.env.PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.qkr4a.mongodb.net/Glacier?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log('Connected successfully'); },
    (err) => { console.log(`Connection failed with ${err}`); },
  );

// Retain an instance of the connection so that we can log errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('close', () => { console.log('MongoDB connection closed'); });

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transactions', transRouter);
app.use('/api/v1/conversations', conversationRouter);
// app.use('/api/v1/uploads', uploadRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
