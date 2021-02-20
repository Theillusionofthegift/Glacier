const express = require('express');

const transactionsRouter = express.Router();
const Transaction = require('../models/transactions');
const transactionController = require('../controllers/transactionController');

transactionsRouter.route('/')
  .get((req, res, next) => {
    Transaction.find({}, (err, transactions) => {
      if (err) { next('Something went wrong'); }
      else { res.send(transactions); }
    });
  })

  .post(transactionController.createTransaction);

transactionsRouter.route('/:id')
  .get((req, res, next) => {
    Transaction.findById(req.params.id, (err, transactions) => {
      if (err) { next('Something went wrong'); }
      else if (transactions) { res.send(transactions); }
      else { res.sendStatus(404); }
    });
  });

// We dont want to update or delete transactions at this time!

module.exports = transactionsRouter;
