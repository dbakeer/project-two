var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/posts.js'),
    User    = require('../models/user.js');

// new user page
router.get('/new', function (req, res) {
  res.render('user/new');
});

router.post('/', function (req, res) {
  var newUser = User(req.body.user);

  newUser.save(function (err, user) {
    res.redirect(301, '/user/' + user._id);
  });
});

router.get('/login', function (req, res){
  res.render('user/login');
});

router.post('/login', function (req, res) {
  var attempt = req.body.user;

  User.findOne({ username: attempt.username }, function (err, user){
    console.log(user);
  });
});

router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user){
    console.log(user);
  });
});

module.exports = router;
