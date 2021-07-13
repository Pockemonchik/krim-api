const mongoose = require('mongoose');

const ObjectDescriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  second_category: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  image_url: {
    type: String,
    required: false
  },
  
});


const ObjectDescription = mongoose.model('ObjectDescription', ObjectDescriptionSchema);

module.exports = ObjectDescription;