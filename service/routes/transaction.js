const e = require('express');
const express = require('express');
const transactionRouter = express.Router();

const Data = require('../data/transactionList');

transactionRouter.route('/')

    .get((req, res, next) => {
        res.json(Data.transactionsList);
    })

    .post((req, res, next) => {
        const searchResult = Data.transactionList.filter((t) => {
            let j = express.json(req.body);
            console.log(j.id);
            return j.id === params.id;
        })
        
        if (searchResult.length != 0) {
            // if transaction already exists, 
            // don't create a new transaction and send CONFLICT status code
            res.sendStatus(409); 
        } else {
            // if transaction not found, 
            // create a new transaction and send CREATED status code
            res.sendStatus(201); 
        }
    });

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

module.exports = transactionRouter;
