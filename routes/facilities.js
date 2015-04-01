var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('facilities', { title: 'Tanay Advunture Camp' });
});

module.exports = router;
