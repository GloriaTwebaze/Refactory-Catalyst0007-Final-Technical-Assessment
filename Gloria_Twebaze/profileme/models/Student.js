const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose')

const studentSchema = new mongoose.Schema({
 surname: {
    type: String,
    required: true,
  },
 givenname: {
    type: String,
    required: true,
  },
 
 
  date: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  }
});



// exporting modules
module.exports = mongoose.model('Student', studentSchema);