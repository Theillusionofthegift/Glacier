// import express from 'express'
const express = require("express");
const app = express();
const port = 4000;

const productsRouter = require('./routes/products');

app.use('/api/v1/products', productsRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });