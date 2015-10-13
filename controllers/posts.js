var express = require('express'),
    router  = express.Router(),
    Post   = require('../models/posts.js'),
    User   = require('../models/user.js');

// Post-based Routes
router.get('/', function (req, res) {
  Post.find({}, function (err, allPosts) {
    if (err) {
      res.redirect(302, 'posts/index');
    } else {
      res.render('posts/index', {
        posts: allPosts
      });
    }
  });
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
