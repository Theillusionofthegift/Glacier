const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    prodName:  String,
    seller: String,
    price: Number,
    postedDate: { type: Date, default: Date.now },
    available: Boolean,
    summary: String,
    description: String,
    categories: [String]
  });


const Product = mongoose.model('product', productSchema);

module.exports = Product;