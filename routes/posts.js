const express = require('express');
const route = express.Router();


// @route   GET API/posts
// @desc    Test route
// @access  Public
route.get('/', (req, res)=>  res.send('Posts route'))

module.exports = route;