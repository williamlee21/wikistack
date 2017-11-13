var express = require('express')
var router = express.Router()
var user = require('./user')
var wiki = require('./wiki')

module.exports = router;

router.use('/wiki', wiki)
router.use('/user', user)


//module.exports = router;
