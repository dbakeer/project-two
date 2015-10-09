///////////////////////////////////////////////////////
////////////////// DEPENDENCIES //////////////////////
/////////////////////////////////////////////////////

var express        = require('express');
    PORT           = process.env.PORT || 5432,
    server         = express(),
    MONGOURI       = process.env.MONGOLAB_URI || "mongodb://localhot:27017",
    dbname         = "CHANGE_THIS",
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
    mongodb        = require('mongodb');


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
  res.write("THIS CREATES SHOWS THE USERS");
  res.end();
});

///////////////////////////////////////////////////////
////////////////// SERVER LOGIN //////////////////////
/////////////////////////////////////////////////////
