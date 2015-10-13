var express = require('express'),
    router  = express.Router(),
    Post   = require('../models/posts.js'),
    User   = require('../models/user.js');

// Post-based Routes

router.get('/', function (req, res){
  res.render('posts/index');
});

router.post('/', function (req, res){
  var posts = new Post(req.body.posts);
  console.log(req.body);
  posts.save(function (err, newPost){
    if (err){
      res.redirect(302, 'posts/new');
      console.log("Post rejected");
    } else {
      console.log("Post saved!");
      res.redirect(302, 'posts');
    }
  });
});

router.get('/new', function (req, res){
  res.render('posts/new');
});


module.exports = router;
