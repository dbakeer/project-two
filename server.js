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
    nodemon        = require('nodemon'),
    expressLayouts = require('express-ejs-layouts'),
    marked         = require('marked'),
    bCrypt         = require('bcrypt'),
    mongodb        = require('mongodb'),
    Posts          = require('./models/posts.js'),
    User           = require('./models/user.js');

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

mongoose.connect(MONGOURI + "/" + dbname);
server.listen(PORT, function () {
  console.log("SERVER IS UP ON PORT:", PORT);
});


///////////////////////////////////////////////////////
////////////////// BASE PAGES/NAVS ///////////////////
/////////////////////////////////////////////////////
server.get('/', function (req, res) {
  res.redirect('index');
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

server.post('/', function (req, res){
  var newPost = Posts(req.body.post);
  newPost.save(function (err, user){
    res.redirect(301, './posts/index')
  });
});

// show all new posts
server.get('/posts/show', function (req, res) {
  res.render('./posts/show');
});
