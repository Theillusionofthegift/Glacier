const express = require('express');
const userRoutes = express.Router();

const Data = require('../data/userList.js');


userRoutes.route('/')
    .get((req, res, next) => 
    {
        res.json(Data.userList);
    })
    .post((req, res, next) => 
    {
        next("An error");
    });


userRoutes.route('/:id')
    .get((req, res, next) => 
    {
        res.sendStatus(501);
    })
    .put((req, res, next) => 
    {
        res.sendStatus(501);
    })
    .delete((req, res, next) => 
    {
        res.sendStatus(501);
    });


module.exports = userRoutes;