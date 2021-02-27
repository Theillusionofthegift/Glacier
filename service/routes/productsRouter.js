const express = require('express');

const productsRouter = express.Router();
const Product = require('../models/product');
const productController = require('../controllers/productController');

productsRouter.route('/')
  .get((req, res, next) => {
    Product.find({}, (err, products) => {
      if (err) { next('Something Went Wrong!'); } else { res.send(products); }
    });
  })
  .post(productController.createProduct);

productsRouter.route('/?')
  .get((req, res, next) => {
    Product.find({ Categories: req.query.search }, (err, search) => {
      if (err) {
        next('Something Went Wrong!');
      } else {
        res.send(search);
      }
    });
  });

productsRouter.route('/:id')
  .get((req, res, next) => {
    Product.findById(req.params.id, (err, products) => {
      if (err) { next(err); } else if (products) {
        res.send(products);
      } else {
        res.sendStatus(404);
      }
    });
  })

  .put((req, res, next) => {
    const options = { validate: true };
    Product.findByIdAndUpdate(req.params.id, req.body, options, (err, product) => {
      if (err) { next('Something Went Wrong!'); } else {
        Product.findById(product, (err, prod) => {
          if (err) { next(err); }
          res.send(prod);
        });
      }
    });
  })

  .delete((req, res, next) => {
    Product.findByIdAndDelete(req.params.id, (err, user) => {
      if (err) { next(err); } else if (user) {
        res.sendStatus(204);
      } else {
        res.status(404).send({ error: `Couldn't find product with id ${req.params.id}` });
      }
    });
  });

module.exports = productsRouter;
