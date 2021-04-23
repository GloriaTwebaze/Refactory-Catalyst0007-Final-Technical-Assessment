//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const patientSchema = new mongoose.Schema({ 
    firstname: {
        type: String,
        required: 'Please Enter first name'
    },
    lastname: {
        type: String,
        required: 'Please Enter last name'
    },
    email: {
        type: String,
        required: 'Please Enter Email'
    }

})

//export the mongoose model
module.exports = mongoose.model('Patient', patientSchema);
