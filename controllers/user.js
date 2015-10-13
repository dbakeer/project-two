var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/posts.js'),
    User    = require('../models/user.js');

// new user page
router.get('/new', function (req, res) {
  res.render('user/new');
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

router.get('/:id', function (req, res){
  User.findById(req.params.id, function (err, user){
  console.log(user);
  });
});

module.exports = router;
