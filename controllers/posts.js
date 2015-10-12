var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/posts.js'),
    User    = require('../models/user.js');

// NEW POST
router.post('/', function (req, res) {
  var newPost = Post(req.body.post);
  newPost.save(function (err, user){
    res.redirect(301, '/posts/')
  });
});

module.exports = router;
