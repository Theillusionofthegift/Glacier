const express = require('express');
const productsRouter = express.Router();

const Data = require('../data/productList');


productsRouter.route('/')
    .get((req, res, next) => {
        res.json(Data.productList);
    })
    .post((req, res, next) => {
        const match = Data.productList.filter((param) => {
            let j = express.json(req.body);
            console.log(j.id);
            return j.id === param.id;
            
        })
        if (match.length === 1) {
            //if found then item is a duplicate and shouldnt be created
            res.status(409);
        } else {
            //if not found then create product
            res.sendStatus(201);
        }
    });

productsRouter.route('/:id')
    .get((req, res, next) => {
        const match = Data.productList.filter((param) => {
            return req.params['id'] === param.id;
        })
        if (match.length === 1) {
            //if found then send the match to the client with status code
            res.status(200).send(match[0]);
        } else {
            //if not then send not found status code
            res.sendStatus(404);
        }
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
    });

module.exports = productsRouter;
