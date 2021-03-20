const Product = require('../models/product');
const { getLocation } = require('../util/GoogleMapsWrapper');

exports.createProduct = async (req, res, next) => {
  // make sure price is greater than zero
  if (req.body.price <= 0 || req.body.price === undefined) {
    res.status(400).send({ error: 'Price must be greater than zero' });
  }
  // make sure the product Name isnt blank
  if (req.body.prodName.trim().length === 0) {
    res.status(400).send({ error: 'Product name connot be blank!' });
  }

  // make sure the product Zipcode isn't blank
  if (req.body.zipcode.trim().length === 0) {
    res.status(400).send({ error: 'Please enter a valid zipcode' });
  } else {
    let geocodedLocation;
    try {
      geocodedLocation = await getLocation(req.body.zipcode);
    } catch (err) {
      res.status(400);
      res.send({ error: 'Invalid Location' });
    }

    const product = {
      prodName: req.body.prodName,
      seller: req.body.seller,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      zipcode: geocodedLocation,
    };

    Product.create(product)
      .then((product1) => {
        res.send({ productId: product1._id });
      })
      .catch((err) => {
        next(err);
      });
  }
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
