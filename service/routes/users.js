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
        const s = Data.userList.filter((param) => {
            let i = express.json(req.body);
            console.log(i.user_id); 
            return i.user_id === param.user_id;
        })

        if(s.length != 0) 
        {
            res.status(409);
        }
        else 
        {
            res.sendStatus(201);
        }
    });


userRoutes.route('/:id')
    .get((req, res, next) => cd De
    {
        const m = Data.userList.filter((param) => {
            return req.params['user_id'] === param.user_id;
        })


        if(m.length === 1) 
        {
            res.status(200).send(match[0]);
        }
        else 
        {
            res.sendStatus(404);
        }

    })
    .put((req, res, next) => 
    {
        const s = Data.userList.filter((param) => {
            return req.params['user_id'] === param.user_id;
        })

        if(s.length != 0) 
        {
            //update the user
            res.sendStatus(204);
        }
        else 
        {
            //the user is not found send appropriate status
            res.sendStatus(404);
        }

    })
    .delete((req, res, next) => 
    {
        const s = Data.userList.filter((param) => {
            return req.params['user_id'] === param.user_id;
        })

        if(s.length != 0) 
        {
            //if the user is found then delete it
            res.sendStatus(204);
        }
        else 
        {
            res.sendStatus(404);
        }
    });


module.exports = userRoutes;