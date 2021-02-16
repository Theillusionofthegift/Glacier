
const Product = require("../models/product");

exports.createProduct= (req, res, next) => {

  // make sure price is greater than zero
  if (req.body.price <= 0 || req.body.price == undefined) { 
      res.status(400).send({error:"Price must be greater than zero"});
  }
  // make sure the product Name isnt blank 
  if(req.body.prodName.trim().length === 0) {
      res.status(400).send({error:"Product name connot be blank!"});
  }

  const categories = req.body.categories;
  const categoriesArr = categories.split(",");

  const product = {
    prodName: req.body.prodName,
    seller: req.body.seller,
    price: req.body.price,
    description: req.body.description,
    categories: categoriesArr,
  };

  Product.create(product)
    .then((product) => {
      res.send({ productId: product._id });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};