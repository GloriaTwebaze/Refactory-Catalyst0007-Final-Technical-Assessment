//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const patientSchema = new mongoose.Schema({ 
    surname: {
        type: String,
        required: 'Please Enter first name'
    },
    givenname: {
        type: String,
        required: 'Please Enter given name'
    },
    dob: {
        type: String,
        required: 'Please Enter DOB'
    },
    occupation:String,
    residence:String,
    nation:String,
    gender:String,
    category:String
})

//export the mongoose model
module.exports = mongoose.model('Patient', patientSchema);
