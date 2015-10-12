///////////////////////////////////////////////////////
////////////////// DEPENDENCIES //////////////////////
/////////////////////////////////////////////////////

var express        = require('express'),
    PORT           = process.env.PORT || 3000,
    server         = express(),
    MONGOURI       = process.env.MONGOLAB_URI || "mongodb://localhost/forum",
    dbname         = "forum",
    mongoose       = require('mongoose'),
    Posts          = require("./models/posts").Posts,
    User           = require("./models/user").User,
    morgan         = require('morgan'),
    session        = require('session'),
    methodOverride = require('method-override'),
    bodyParser     = require('body-parser'),
    nodemon        = require('nodemon'),
    ejs            = require('ejs'),
    expressLayouts = require('express-ejs-layouts'),
    marked         = require('marked'),
    bCrypt         = require('bcrypt'),
    mongodb        = require('mongodb');

/////////////////////////////////////////////////////
//////////////////// APP ///////////////////////////
///////////////////////////////////////////////////
server.set('view engine', 'ejs');
server.set('views', './views');

server.use(morgan('dev'));
server.use(express.static('./public'));

server.use(expressLayouts);

mongoose.createConnection('mongodb://localhost/forum');

server.use(methodOverride('_method'));
// forms post to "/action?_method=SOMETHING"

server.use(bodyParser.urlencoded({ extended: true }));

module.exports = server;


///////////////////////////////////////////////////////
///////////////////// BASE PAGE //////////////////////
/////////////////////////////////////////////////////
server.get('/', function (req, res) {
  res.write("THIS IS THE FRONT PAGE!");
  res.end();
});

mongoose.connect(MONGOURI + "/" + dbname);
server.listen(PORT, function () {
  console.log("SERVER IS UP ON PORT:", PORT);
});




///////////////////////////////////////////////////////
/////////////////// USER ROUTES //////////////////////
/////////////////////////////////////////////////////

// create new user
server.get('/user', function (req, res) {
  res.render('./user/index');
});

// form for setting up a new user
server.get('/user/new', function (req, res) {
  res.render('./user/new');
});

// show all users
server.get('/user/show', function (req, res) {
  res.render('./user/show');
});



///////////////////////////////////////////////////////
/////////////////// POST ROUTES //////////////////////
/////////////////////////////////////////////////////

// create new post
server.get('/posts', function (req, res) {
  res.render('./posts/index');
});

// form for new posts
server.get('/posts/new', function (req, res) {
  res.render('./posts/new');
});

// show all new posts
server.get('/posts/show', function (req, res) {
  res.render('./posts/show');
});
