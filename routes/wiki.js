var express = require('express')
var router = express.Router()
var user = require('./user')
var wiki = require('./wiki')

router.use('/wiki', wiki)

router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});


module.exports = router;
