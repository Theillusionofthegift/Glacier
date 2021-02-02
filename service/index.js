// import express from 'express'
const express = require("express");
const app = express();
const port = 4000;

const productsRouter = require('./routes/products');
const transRouter = require('./routes/transactions');
const usersRouter = require('./routes/users');

app.use(express.json())
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transactions', transRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
