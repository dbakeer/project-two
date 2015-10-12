var express = require('express'),
    router  = express.Router(),
    Post    = require('../models/posts.js'),
    User    = require('../models/user.js');

// RENDERING POSTS PAGES
router.get('/posts', function (req, res) {
  res.render('../views/posts/index');
});

router.get('/posts/new', function (req, res) {
  res.render('../views/posts/new');
});

router.get('/posts/show', function (req, res) {
  res.render('../views/posts/show');
});

// NEW POST
router.post('/', function (req, res) {
  var newPost = Post(req.body.post);
  newPost.save(function (err, user){
    res.redirect(301, '/posts/')
  });
});

module.exports = router;
