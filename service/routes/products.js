const express = require('express');
const productsRouter = express.Router();

const Data = require('../data/productList');


productsRouter.route('/')
    .get((req, res, next) => {
        res.json(Data.productList);
    })
    .post((req, res, next) => {
        //error
        next("An error");
    });

productsRouter.route('/:id')
    .get((req, res, next) => {
        res.sendStatus(501);
    })
    .put((req, res, next) => {
        res.sendStatus(501);
    })
    .delete((req, res, next) => {
        res.sendStatus(501);
    });

module.exports = productsRouter;