const mongoose = require('mongoose');

const ObjectDescriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  
});


const ObjectDescription = mongoose.model('ObjectDescription', ObjectDescriptionSchema);

module.exports = ObjectDescription;