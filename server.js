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
    layouts        = require('express-ejs-layouts'),
    marked         = require('marked'),
    bCrypt         = require('bcrypt'),
    mongodb        = require('mongodb'),
    Posts          = require('./models/posts.js'),
    User           = require('./models/user.js');



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
/////////////////// POST ROUTES //////////////////////
/////////////////////////////////////////////////////
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
