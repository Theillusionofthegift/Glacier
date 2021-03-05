const express = require('express');
const multer = require('multer');

const upload = multer({ dest: '../uploads' });
const uploadsRouter = express.Router();

uploadsRouter.route('/')
  .post(upload.single('featImage'), (req, res, next) => {
    try {
      const featuredImage = req.file;

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
