const express = require('express');
const transactionsRouter = express.Router();

const Data = require('../data/transactionsList');

transactionsRouter.route('/')
    .get((req, res, next) => {
        res.json(Data.transactionsList);
    })
    .post((req, res, next) => {
        next("An error");
    });

transactionsRouter.route('/:id')
    .get((req, res, next) => {
        res.sendStatus(501);
    })
    .put((req, res, next) => {
        res.sendStatus(501);
    })
    .delete((req, res, next) => {
        res.sendStatus(501);
    })

module.exports = transactionsRouter;
