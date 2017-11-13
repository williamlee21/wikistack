var express = require('express')
var router = express.Router()
var user = require('./user')


// router.use('/wiki', wiki)

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  // var postReq = req.body;
  // res.send(postReq);
  //res.send('got to POST')
  res.json(req.body)
});

router.get('/add', function(req, res, next) {
  res.render('addpage')
});


module.exports = router;
