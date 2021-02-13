const express = require('express');
const productsRouter = express.Router();

const Data = require('../data/mockData');
const Product = require('../models/product')
const productController = require('../controllers/productController')


productsRouter.route('/')
    .get((req, res, next) => {
        Product.find({}, (err, products) => {
            if (err) { next("Something Went Wrong!") }
            else { res.send(products) }
        })
    })
    .post(productController.createProduct);


productsRouter.route('/:id')
    .get((req, res, next) => {
        Product.findById(req.params.id, (err, products) => {
            if (err) { next(err) }
            // if event is not null, it has been found
            else if (products) { res.send(products) }
            // on the other hand, if it is null...
            else { res.sendStatus(404) }
        })
    })

    .put((req, res, next) => {
        const options = { validate: true };
        Product.findByIdAndUpdate(req.params.id, req.body, options, (err, product) => {
            if (err) {
                next('Something Went Wrong!')
            } else {
                Product.findById(req.params.id, (err, product) => {
                    res.send(product)
                })
            }
        })
    })
    .delete((req, res, next) => {
        User.findByIdAndDelete(req.params.id, (err, user) => {
            if (err) { next(err) }
            else if (user) {
                res.sendStatus(204);
            } else {
                res.status(404).send({ error: `Couldn't find user with id ${req.params.id}` });
            }
        });
    })

module.exports = productsRouter;
