const express = require('express');
const multer = require('multer');
const Product = require('../models/product');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads/');
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
  .post(upload.single('profile'), (req, res, next) => {
    try {
      const featuredImage = req.file;
      // by this point the file has been saved or an error has occurred.
      // if req.file exists, the save was successful
      if (!featuredImage) {
        res.status(400);
        res.send({ error: 'No file selected' });
      } else {
        res.send({ message: 'Success' });
      }
    } catch (err) {
      next(err);
    }
  });

module.exports = uploadsRouter;
