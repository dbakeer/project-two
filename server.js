///////////////////////////////////////////////////////
////////////////// DEPENDENCIES //////////////////////
/////////////////////////////////////////////////////

var express        = require('express'),
    PORT           = process.env.PORT || 5432,
    server         = express(),
    MONGOURI       = process.env.MONGOLAB_URI || "mongodb://localhost:27017",
    dbname         = "forum",
    mongoose       = require('mongoose'),
    morgan         = require('morgan'),
    session        = require('session'),
    methodOverride = require('method-override'),
    bodyParser     = require('body-parser'),
    nodemon        = require('nodemon'),
    ejs            = require('ejs'),
    layouts        = require('express-ejs-layouts'),
    marked         = require('marked'),
    bCrypt         = require('bcrypt'),
    mongodb        = require('mongodb'),
    Posts          = require('./models/posts.js'),
    User           = require('./models/user.js'),
    bootStrap      = require('bootstrap');



/////////////////////////////////////////////////////
//////////////////// APP ///////////////////////////
///////////////////////////////////////////////////
server.set('views', './views');
server.set('view engine', 'ejs');
server.use(express.static('./public'));
  server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(methodOverride('_method'));
// forms post to "/action?_method=SOMETHING"
module.exports = server;

server.use(function (req, res, next){
  console.log("REQ DOT BODY", req.body);
  console.log("REQ DOT SESSION", req.session);
});

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
server.get('/user/', function (req, res) {
  res.write("THIS IS THE USER HOMEPAGE");
  res.end();
});

// form for setting up a new user
server.get('/user/new', function (req, res) {
  res.write("THIS CREATES NEW USERS");
  res.end();
});

// show all users
server.get('/user/show', function (req, res) {
  res.write("THIS SHOWS THE USER PROFILE");
  res.end();
});



///////////////////////////////////////////////////////
/////////////////// POST ROUTES //////////////////////
/////////////////////////////////////////////////////

// create new post
server.get('/posts/', function (req, res) {
  res.write("THIS IS THE POST HOMEPAGE");
  res.end();
});

// form for new posts
server.get('/posts/new', function (req, res) {
  res.write("THIS CREATES NEW POSTS");
  res.end();
});

// show all new posts
server.get('/posts/show', function (req, res) {
  res.write("THIS SHOWS ALL POSTS");
  res.end();
});
