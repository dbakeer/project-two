var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/posts.js'),
    User    = require('../models/user.js');
// main page after logging in
router.get('/index', function (req, res){
  if (req.session.currentUser) {
    res.render('user/index', {
      currentUser: req.session.currentUser
    });
  } else {
    res.redirect(302, '/user/login');
  }
  res.render('user/index');
});

// new user page
router.get('/new', function (req, res) {
  res.render('user/new');
});

router.post('/', function (req, res) {
  var newUser = User(req.body.user);

  newUser.save(function (err, user) {
    req.session.currentUser = req.body.user.username;
    res.redirect(302, '/user/login');
  });
});

router.get('/login', function (req, res){
  res.render('user/login');
});

router.post('/login', function (req, res) {
  var attempt = req.body.user;

  User.findOne({ username: attempt.username }, function (err, user){
    if (user) {
      if (user && user.password === attempt.password) {
        req.session.currentUser = user.username;

        res.redirect(302, '/user/index');
      }
    } else {
      res.redirect(302, '/user/login');
    }
  });
});

router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user){
    console.log(user);
  });
});

module.exports = router;
