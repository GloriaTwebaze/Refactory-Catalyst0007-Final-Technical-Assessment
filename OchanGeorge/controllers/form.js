const Form = require('../models/form');

// Controller for the get route
exports.getForm = async (req, res) => {
  try {
    res.render('form');
  } catch (err) {
    res.status(400).send('Failed to retrieve the Form.');
  }
};

// Controller for the post route
exports.postForm = async (req, res) => {
  try {
    await Form.create(req.body);
    res.render('form');
  } catch (err) {
    res.status(400).send('Failed to retrieve the Form.');
  }
};
