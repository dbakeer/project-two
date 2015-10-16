var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/posts.js'),
    User    = require('../models/user.js');

// LOGIN
router.get('/login', function (req, res){
  res.render('user/login');
});

router.post('/login', function (req, res) {
  var attempt = req.body.user;

  User.findOne(
    { username: attempt.username },
    function (err, user) {
      if (user) {
        if (user && user.password === attempt.password) {
          req.session.currentUser = user.username;

          res.redirect(302, '/user/index');
        } else {
          res.redirect('user/login');
   }}});
});

// MAIN PAGE AFTER LOGGING IN
router.get('/index', function (req, res) {
  if (req.session.currentUser) {
    res.render('user/index', {
      currentUser: req.session.currentUser
    });
  } else {
    res.redirect(302, '/user/login');
  }
});

// CREATE A NEW USER
router.get('/new', function (req, res) {
  res.render('user/new');
});

router.post('/', function (req, res) {
  var newUser = User(req.body.user);

  newUser.save(function (err, user) {
    req.session.currentUser = req.body.user.username;
    res.redirect(302, '/user/index');
  });
});

// SUBSCRIPTIONS/PULL BOX REQUEST
router.get('/:id', function (req, res){
  if (req.session.currentUser) {
    User.findById(req.params.id, function (err, result) {
      res.render('user/subs', {
        user: result,
        currentUser: req.session.currentUser
      });
    });
  } else {
    res.redirect(302, '/user/new');
  }
});

router.post('/:id', function (req, res) {
  var newSub = req.body.user;

  newSub.username = req.session.currentUser;

  User.update(
    { _id: req.params.id },
    { $push: newSub },
    function (){
    (res.redirect('/user/')
    );
  });
});

// LOGOUT
router.get('/logout', function (req, res) {
  delete req.session.currentUser;
  res.redirect('/');
});



module.exports = router;
