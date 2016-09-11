var express = require('express')
  , router = express.Router();
  // , Comment = require('../models/comment')

// router.use('/comments', require('./comments'))

router.get('/', function(req, res) {
	console.log('****************************************************************');
  res.send('Hello world !');
})

module.exports = router;