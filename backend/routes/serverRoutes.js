const express = require('express');
const router = express.Router();
const {
  getImage,
  getImageId,
  createImage,
  updateImage,
  deleteImage
} = require('../controllers/serverControllers')


router.route('/').get(getImage).post(createImage)
router.route('/:id').get(getImageId).put(updateImage).delete(deleteImage)

module.exports = router

