///////////////////////////////////////////////////////
////////////////// DEPENDENCIES //////////////////////
/////////////////////////////////////////////////////

var express        = require('express'),
    PORT           = process.env.PORT || 3000,
    server         = express(),
    MONGOURI       = process.env.MONGOLAB_URI || "mongodb://localhot:27017",
    dbname         = "forum",
    mongoose       = require('mongoose'),
    morgan         = require('morgan'),
    session        = require('session'),
    methodOverride = require('method-override'),
    bodyParser     = require('body-parser'),
    nodemon        = require('nodemon'),
    ejs            = require('ejs'),
    expressLayouts = require('express-ejs-layouts'),
    marked         = require('marked'),
    bCrypt         = require('bcrypt'),
    mongodb        = require('mongodb'),
    Posts          = require('./models/posts.js'),
    User           = require('./models/user.js'),
    session        = require('express-session');



/////////////////////////////////////////////////////
//////////////////// APP ///////////////////////////
///////////////////////////////////////////////////
server.set('views', './views');
server.set('view engine', 'ejs');
server.set('layout', 'myLayout');
server.use(morgan('dev'));
server.use(expressLayouts);
server.use(express.static('./public'));
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(methodOverride('_method'));
module.exports = server;
server.use(session({
  secret: "ENCRYPTED PASSPHRASE",
  resave: true,
  saveUninitialized: true
}));


///////////////////////////////////////////////////////
///////////////// "IMPORTING" MODELS /////////////////
/////////////////////////////////////////////////////
var postsModel = require('./models/posts.js');
server.use('/posts', postsModel);

var userModel = require('./models/user.js');
server.use('/user', userModel);


///////////////////////////////////////////////////////
///////////////////// BASE PAGE //////////////////////
/////////////////////////////////////////////////////
server.get('/', function (req, res) {
  res.render('aView', { layout: 'layoutMain'});
  res.write("THIS IS THE FRONT PAGE!");
  res.end();
});

mongoose.connect(MONGOURI + "/" + dbname);
server.listen(PORT, function () {
  console.log("SERVER IS UP ON PORT:", PORT);
});



///////////////////////////////////////////////////////
/////////////////// POST ROUTES //////////////////////
/////////////////////////////////////////////////////
server.get('/posts', function (req, res) {
  res.write("THIS SHOWS ALL POSTS");
  res.end();
});

server.get('/posts/new', function (req, res) {
  res.write("THIS CREATES NEW POSTS");
  res.end();
});

server.get('/posts/show', function (req, res) {
  res.write("THIS CREATES SHOWS ALL POSTS");
  res.end();
});


///////////////////////////////////////////////////////
/////////////////// USER ROUTES //////////////////////
/////////////////////////////////////////////////////
server.get('/user/new', function (req, res) {
  res.write("THIS CREATES NEW USERS");
  res.end();
});

server.get('/user/show', function (req, res) {
  res.write("THIS SHOWS THE USER PROFILE");
  res.end();
});
