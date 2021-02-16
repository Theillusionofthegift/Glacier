// import express from 'express'
const express = require("express");
const app = express();
const port = 4000;

require('dotenv').config({ path: '.env' });

const morgan = require('morgan');
const cors = require('cors');

const productsRouter = require('./routes/productRouter');
const transRouter = require('./routes/transactionRouter');
const usersRouter = require('./routes/userRouter');
const conversationRouter = require('./routes/conversationRouter');

// Setting up mongoose connection
const mongoose = require('mongoose');
const Conversation = require("./models/conversations");

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const mongoDB = `mongodb+srv://${user}:${password}@cluster0.qkr4a.mongodb.net/Glacier?retryWrites=true&w=majority`;
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => { console.log("Connected successfully") },
    (err) => { console.log(`Connection failed with ${err}`) }
  );

// Retain an instance of the connection so that we can log errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('close', () => { console.log("MongoDB connection closed") });

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())

app.use('/api/v1/productRouter', productsRouter);
app.use('/api/v1/userRouter', usersRouter);
app.use('/api/v1/transactionRouter', transRouter);
app.use('/api/v1/conversationRouter', conversationRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
