const dateFns = require("date-fns"); 

const Transaction = require("../models/transactions");

exports.createTransaction = (req, res, next) => {

	//checks to see if a seller is present or not    
    if(req.body.seller == "" || req.body.seller == undefined)
    {
    	res.status(400).send({error:"You must have a seller to complete this transaction"});
    }

    //checks to see if a buyer is present 
    if(req.body.buyer == "" || req.body.buyer == undefined)
    {
    	res.status(400).send({error:"You must have a buyer to complete this transaction"});
    }

    const transaction = {
    	product: req.body.product, 
    	salePrice: req.body.salePrice, 
    	seller: req.body.seller, 
    	buyer: req.body.buyer, 
    	saleDate: req.body.saleDate
    };

    Transaction.create(transaction)
    	.then((transaction) => {
    		res.send({ transactionId: transaction._id });
    	})
    	.catch((err) => {
    		console.log(err); 
    		next(err);
    	});
};

