var express = require('express');
var router = express.Router();

/* GET CHAT page. */
router.get('/', function(req, res, next) {
  res.render('chat');
});

module.exports = router;
