const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`);
  },
});
const upload = multer({ storage });

const uploadsRouter = express.Router();

uploadsRouter.route('/products')
  .post(upload.array('images', 3), async (req, res) => {
    try {
      const images = req.files;

      // check if photos are available
      if (!images) {
        res.status(400).send({
          status: false,
          data: 'No photos are selected.',
        });
      } else {
        const data = [];

        // iterate over all photos
        images.map((image) => data.push({
          name: image.originalname,
          mimetype: image.mimetype,
          size: image.size,
        }));

        // send response
        res.send({
          status: true,
          message: 'Photos are uploaded.',
          data,
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
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
