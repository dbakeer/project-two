var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/posts.js'),
    User    = require('../models/user.js');

// new user page
router.get('/new', function (req, res) {
  res.render('user/new');
});

router.get('/index', function (req, res) {
  res.render('user/index');
});

// create a new user
router.post('/', function (req, res){
  var newUser = new User(req.body.user);

  newUser.save(function (err, user){
    if (err) {
      console.log(err);
    } else {
      res.redirect(302, '/user/' + User._id);
    }
  });
});

router.get('/login', function (req, res) {
  res.render('user/login');
});

router.post('/login', function (req, res) {
  var attempt = req.body.user;

  User.findOne({ username: attempt.username }, function (err, user) {
    if (user) {
      if (user && user.password === attempt.password) {
        req.session.currentUser === user.username;

        res.redirect(301, '/index');
      };
    } else {
      res.redirect(301, '/login');
    }
  });
});

router.get('/:id', function (req, res){
  User.findById(req.params.id, function (err, user){

  });
});

module.exports = router;
