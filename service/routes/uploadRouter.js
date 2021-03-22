const express = require('express');
const multer = require('multer');
const Product = require('../models/product');
const User = require('../models/users');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}.png`);
  },
});
const upload = multer({ storage });

const uploadsRouter = express.Router();

uploadsRouter.route('/products')
  .post(upload.array('images', 3), async (req, res) => {
    const imagesPaths = req.files.map((file) => file.path);
    Product.findByIdAndUpdate(req.body.productId, { images: imagesPaths }, (err, prod) => {
      if (err) {
        res.send(500);
      } else if (prod) {
        res.status(204).send(prod);
      } else {
        res.send(404);
      }
    });
  });

uploadsRouter.route('/profile')
  .post(upload.single('profile'), async (req, res) => {
    const imagePath = req.file.path;
    User.findByIdAndUpdate(req.body.userId, { image: imagePath }, (err, prod) => {
      if (err) {
        res.send(500);
      } else if (prod) {
        res.status(204).send(prod);
      } else {
        res.send(404);
      }
    });
  });

module.exports = uploadsRouter;
