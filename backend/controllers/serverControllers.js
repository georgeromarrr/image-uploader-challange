const asyncHandler = require('express-async-handler')
const Image = require('../models/serverModel')

// description: GET Image details
// routes: GET /api/images
// access: Private
const getImage = asyncHandler( async (req, res) => {
  const image =  await Image.find({})


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
  res.status(200).json({message: `Update Image ${req.params.id}`})
})

// description: DELETE Image detail
// routes: DELETE /api/images/:id
// access: Private
const deleteImage = asyncHandler( async (req, res) => {
  res.status(200).json({message: `Delete Image ${req.params.id}`})
})

module.exports = {
  getImage,
  createImage,
  updateImage,
  deleteImage,
}