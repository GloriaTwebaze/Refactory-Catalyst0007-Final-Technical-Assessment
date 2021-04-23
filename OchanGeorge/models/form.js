const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  surName: {
    type: String,
  },
  givenName: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  placeOfResidence: {
    type: String,
  },
  occupation: {
    type: String,
  },
  nationality: {
    type: String,
  },
  gender: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model('Form', FormSchema);
