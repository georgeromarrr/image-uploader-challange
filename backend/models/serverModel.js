const mongoose = require('mongoose');

const imageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    img:
    {
      type: String,
      required: true
    }
  },
  {
  timestamps: true
  }
)

module.exports = mongoose.model('ImageData', imageSchema)