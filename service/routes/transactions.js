const express = require('express');
const transactionsRouter = express.Router();

const Data = require('../data/mockData');
const Transaction = require('../models/transactions');
const transactionController = require('../controllers/transactionController');



transactionsRouter.route('/')
    .get((req, res, next) => {
        Transaction.find({}, (err, transactions) => {
            if(err) { next("Something went wrong") }
            else { res.send(transactions) }
        })
    })
    .post(transactionController.createTransaction);

transactionsRouter.route('/:id')

    .get((req, res, next) => {
        const matchingTransaction = Data.transactionList.filter((t) => {
            return req.params['id'] === t.id;
        })

        if (matchingTransaction.length === 1) {
            // if matching transaction if found, 
            // return transaction and OK status code
            res.send(matchingTransaction[0]); 
            res.sendStatus(200);
        } else {
            // if matching transaction not found, 
            // return NOT FOUND status code
            res.sendStatus(404);
        }
    })

    .put((req, res, next) => {
        const searchResult = Data.transactionList.filter((t) => {
            return req.params['id'] === t.id;
        })

        if (searchResult.length != 0) {
            // if matching transaction if found, 
            // update transaction and return OK status code
            res.sendStatus(204);
        } else {
            // if matching transaction not found, 
            // return NOT FOUND status code
            res.sendStatus(404);
        }
    })

    .delete((req, res, next) => {
        const searchResult = Data.transactionList.filter((t) => {
            return req.params['id'] === t.id;
        })

        if (searchResult.length != 0) {
            // if matching transaction if found, 
            // update transaction and return OK status code 
            res.sendStatus(204);
        } else {
            // if matching transaction not found, 
            // return NOT FOUND status code
            res.sendStatus(404);
        }
    });

module.exports = transactionsRouter;
