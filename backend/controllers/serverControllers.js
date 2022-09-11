const asyncHandler = require('express-async-handler')
const Image = require('../models/serverModel')

// description: GET Image details
// routes: GET /api/images
// access: Private
const getImage = asyncHandler( async (req, res) => {
  const image =  await Image.find({})
  res.status(200).json(image)
})

// description: GET Image details by ID
// routes: GET /api/images
// access: Private
const getImageId = asyncHandler( async (req, res) => {
  const image = await Image.findById(req.params.id)

  if(!image) {
    res.status(400)
    throw new Error('Image does not exist')
  }

  res.status(200).json(image)
})

// description: CREATE New Image
// routes: POST /api/images
// access: Private
const createImage = asyncHandler( async (req, res) => {
  if(!req.body){
    res.status(400)
    throw new Error('Please upload an Image')
  }

  const image = await Image.create({
    name: req.body.name,
    img: req.body.img
  })

  res.status(200).json(image)

})

// description: Update Image detail
// routes: PUT /api/images/:id
// access: Private
const updateImage = asyncHandler( async (req, res) => {
  const image = await Image.findById(req.params.id)

  if(!image) {
    res.status(400)
    throw new Error('Image does not exist')
  }

  const imageUpdated = await Image.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(imageUpdated)
})

// description: DELETE Image detail
// routes: DELETE /api/images/:id
// access: Private
const deleteImage = asyncHandler( async (req, res) => {
  const image = await Image.findById(req.params.id)

  if(!image) {
    res.status(400)
    throw new Error('Image does not exist')
  }

  await image.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getImage,
  getImageId,
  createImage,
  updateImage,
  deleteImage,
}