var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/posts.js'),
    User    = require('../models/user.js');

// NEW USER
router.post('/', function (req, res) {
  var newUser = Post(req.body.post);
  newPost.save(function (err, user){
    res.redirect(301, '/user/');
  });
});

module.exports = router;
