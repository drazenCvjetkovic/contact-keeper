const express = require('express');
const router = express.Router();

// @route  POST api/users
// @desc Register a user  ,becouse of that this is a public method
// @access Public

router.post('/', (req, res) => {
  res.send('register users');
});

module.exports = router;
