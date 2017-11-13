const express = require('express')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')

const wiki = express();

var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
wiki.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
wiki.engine('html', nunjucks.render);

var models = require('./models');
wiki.use(morgan('dev'))
wiki.use(bodyParser.urlencoded({extended: true}))
wiki.use(bodyParser.json())
wiki.use(express.static(__dirname + '/stylesheets'))



wiki.get('/hello', (req, res) => {
  res.send('I am here! Have some Puppies!')
})





wiki.use('/', routes);


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

// this drops all tables then recreates them based on our JS definitions
models.db.sync({force: true})
