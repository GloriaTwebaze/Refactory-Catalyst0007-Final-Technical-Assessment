//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const registrationSchema = new mongoose.Schema({
  surname: {
    type: String,
  },
  givenname: {
    type: String,
  },
  date: {
    type: String,
  },
  residence: {
    type: String,
  },
  occupation: {
    type: String,
  },
  nationality: {
    type: String,
  },
  request: {
    type: String,
  },
  gender: [
    {
      type: String,
    },
  ],
});

//export the mongoose model
module.exports = mongoose.model('Registration', registrationSchema);
