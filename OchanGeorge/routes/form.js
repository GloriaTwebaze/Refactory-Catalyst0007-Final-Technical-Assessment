// Imports
const express = require('express');

// Destructing for controllers into the routes
const { getForm, postForm } = require('../controllers/form');

// Instantiation of the the Route object
const router = express.Router();

router.route('/form').get(getForm).post(postForm);

// Exportation of the Routes
module.exports = router;
