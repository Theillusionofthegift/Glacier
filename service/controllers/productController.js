const Product = require('../models/product');

exports.createProduct = (req, res, next) => {
  // make sure price is greater than zero
  if (req.body.price <= 0 || req.body.price === undefined) {
    res.status(400).send({ error: 'Price must be greater than zero' });
  }
  // make sure the product Name isnt blank
  if (req.body.prodName.trim().length === 0) {
    res.status(400).send({ error: 'Product name connot be blank!' });
  }

  const product = {
    prodName: req.body.prodName,
    seller: req.body.seller,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    zipcode: req.body.zipcode,
  };

  Product.create(product)
    .then((product1) => {
      res.send({ productId: product1._id });
    })
    .catch((err) => {
      next(err);
    });
};

exports.searchProduct = (req, res, next) => {
  if (req.query.search) {
    Product.find({ category: req.query.search }, (err, search) => {
      if (err) {
        next('Something Went Wrong!');
      } else {
        res.send(search);
      }
    });
  } else if (req.query.seller) {
    Product.find({ seller: req.query.seller }, (err, search) => {
      if (err) {
        next('Something Went Wrong!');
      } else {
        res.send(search);
      }
    });
  } else {
    Product.find({ available: true }, (err, products) => {
      if (err) { next('Something Went Wrong!'); } else { res.send(products); }
    });
  }
};
