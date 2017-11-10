const express = require('express')
const nunjucks = ('nunjucks')
const morgan = ('morgan')
const bodyParser = require('body-parser')

const wiki = express();

var models = require('./models');

models.User.sync({})
.then(function () {
    return models.Page.sync({})
})
.then(function () {
    wiki.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);

//models.db.sync({force: true})
