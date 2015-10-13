///////////////////////////////////////////////////////
////////////////// DEPENDENCIES //////////////////////
/////////////////////////////////////////////////////

var PORT           = process.env.PORT || 3000,
    MONGOURI       = process.env.MONGOLAB_URI || "mongodb://localhost/forum",
    dbname         = "forum";
    express        = require('express'),
    server         = express(),
    ejs            = require('ejs'),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    morgan         = require('morgan'),
    session        = require('express-session'),
    methodOverride = require('method-override'),
    expressLayouts = require('express-ejs-layouts'),
    Schema         = mongoose.Schema;

/////////////////////////////////////////////////////
//////////////////// APP ///////////////////////////
///////////////////////////////////////////////////
server.set('view engine', 'ejs');
server.set('views', './views');

server.use(morgan('dev'));
server.use(express.static('./public'));

server.use(expressLayouts);

server.use(methodOverride('_method'));

server.use(bodyParser.urlencoded({ extended: true }));

module.exports = server;

server.use(session({
  secret: "ENCRYPTTHIS",
  resave: false,
  saveUninitialized: false
}));

///////////////////////////////////////////////////////
//////////////////// DATABASE  ///////////////////////
/////////////////////////////////////////////////////
mongoose.connect(MONGOURI + "/" + dbname);

server.listen(PORT, function () {
  console.log("SERVER IS UP ON PORT:", PORT);
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DATABASE UP");
});

///////////////////////////////////////////////////////
//////////////////// CONTROLLERS /////////////////////
/////////////////////////////////////////////////////

var userController = require('./controllers/user.js');
server.use('/user', userController);

var postsController = require('./controllers/posts.js');
server.use('/posts', postsController);

///////////////////////////////////////////////////////
/////////////////// GENERAL ROUTES ///////////////////
/////////////////////////////////////////////////////
server.get('/', function (req, res) {
  res.redirect('/user/new');
});

server.use(function (req, res) {
  res.render('whoops');
});
