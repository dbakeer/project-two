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
    expressLayouts = require('express-ejs-layouts');

/////////////////////////////////////////////////////
//////////////////// APP ///////////////////////////
///////////////////////////////////////////////////
server.set('view engine', 'ejs');
server.set('views', './views');

server.use(morgan('dev'));
server.use(express.static('./public'));

server.use(expressLayouts);

server.use(methodOverride('_method'));
// forms post to "/action?_method=SOMETHING"

server.use(bodyParser.urlencoded({ extended: true }));

module.exports = server;

mongoose.connect(MONGOURI + "/" + dbname);
server.listen(PORT, function () {
  console.log("SERVER IS UP ON PORT:", PORT);
});

server.use(session({
  secret: "ENCRYPTTHIS",
  resave: false,
  saveUninitialized: false
}));

///////////////////////////////////////////////////////
//////////////////// DATABASE  ///////////////////////
/////////////////////////////////////////////////////
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DATABASE UP");
});

///////////////////////////////////////////////////////
//////////////////// CONTROLLERS /////////////////////
/////////////////////////////////////////////////////
var userController = require('./controllers/user.js');
server.use('/users', userController);

var postsController = require('./controllers/posts.js');
server.use('/posts', postsController);


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
