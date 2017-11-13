const express = require('express')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')

const wiki = express();


wiki.engine('html', nunjucks.render)
wiki.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});



wiki.use('/', routes);


var models = require('./models');
wiki.use(morgan('dev'))
wiki.use(bodyParser.urlencoded({extended: true}))
wiki.use(bodyParser.json())
wiki.use(express.static(__dirname + '/stylesheets'))



// wiki.get('/hello', (req, res) => {
//   res.send('I am here! Have some Puppies!')
// })


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
