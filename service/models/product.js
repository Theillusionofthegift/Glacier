const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  readable: String,
  latitude: Number,
  longitude: Number,
});

const productSchema = new mongoose.Schema({
  prodName: { type: String, required: true },
  seller: { type: String, required: true },
  price: Number,
  postedDate: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
  summary: String,
  description: String,
  category: String,
  zipcode: { type: Number, required: true },
  location: locationSchema,
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
