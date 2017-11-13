var express = require('express')
var router = express.Router()
var user = require('./user')


// router.use('/wiki', wiki)

router.get('/', function(req, res, next) {
  res.send('');
});

router.post('/', function(req, res, next) {
  var postReq = req.body;
  res.send(postReq);
});

router.get('/add', function(req, res, next) {
  res.send('');
});


module.exports = router;
