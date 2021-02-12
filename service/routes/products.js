const express = require('express');
const productsRouter = express.Router();

const Data = require('../data/mockData');
const Product = require('../models/product')


productsRouter.route('/')
    .get((req, res, next) => {
        Product.find({}, (err, products) => {
            if (err) {next("Something Went Wrong!")}
            else { res.send(products)}
        })
    })
    .post((req, res, next) => {
        if (err) {next("Something Went Wrong!")}
        if(req.body) {
    
        }

    });

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
        const search = Data.productList.filter((param) =>{
            return req.params['id'] === param.id;
        })
        if (search.length != 0) {
            //if found then update that product 
            res.sendStatus(204);
        } else {
            //if not then send not found status code
            res.sendStatus(404);
        }
        next("an error")
    })
    .delete((req, res, next) => {
        const search = Data.productList.filter((param) =>{
            return req.params['id'] === param.id;
        })
        if (search.length != 0) {
            //if found then delete
            res.sendStatus(204);
        } else {
            //if not then send not found status code
            res.sendStatus(404);
        }
        next("an error")
    });

module.exports = productsRouter;
