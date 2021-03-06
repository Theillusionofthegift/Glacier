const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const uploadsRouter = express.Router();

uploadsRouter.route('/')
  .post(upload.array('images', 3), async (req, res) => {
    try {
      const images = req.files;

      // check if photos are available
      if (!images) {
        res.status(400).send({
          status: false,
          data: 'No photo is selected.',
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

module.exports = uploadsRouter;
