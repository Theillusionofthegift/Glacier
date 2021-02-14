const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
    product:  String,
    salePrice: Number,
    seller: String,
    buyer: String,
    saleDate: { type: Date, default: Date.now }
});


const Transaction = mongoose.model('transactions', transactionsSchema);

module.exports = Transaction;