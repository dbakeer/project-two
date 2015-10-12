var express = require('express'),
    router  = express.Router(),
    post    = require('../models/posts.js'),
    User    = require('../models/user.js');

// ROUTES
// base posts page
router.get('/posts', function (req, res){
  res.render('./posts/index');
});

// show all posts
router.get('posts/show', function (req, res){
  post.find({}, function (err, allPosts){
    if (err) {
      console.log(err);
    } else {
      res.render('posts/show', {
        post: allPosts
      });
    }
  });
});

// new posts
router.get('/posts/new', function (req, res){
  res.render('posts/new');
});

router.get('/posts/show', function (req, res){
  res.render('posts/show');

  var postOptions = req.body.post;

  var newPost = new post(postOptions);

  newPost.save(function (err, afterPost){
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
      res.redirect(302, "/posts/show");
    }
  });
});

module.exports = router;
