var express = require('express'),
    router  = express.Router(),
    Post   = require('../models/posts.js'),
    User   = require('../models/user.js');

// show all posts
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

// form to create new posts
router.get('/new', function (req, res){
  res.render('posts/new');
});

// delete a post
router.delete('/:id', function (req, res) {
  Post.findById(req.params.id, function (err, result) {
    result.remove(function(){
      res.redirect(302, "/posts/");
    });
  });
});

// edit a post
router.get('/:id/edit', function (req, res){
  Post.findById(req.params.id, function (err, result){
  res.render('posts/edit', { post: result  });
  });
});

// update a post
router.patch("/:id", function (req, res) {
  Post.findById(req.params.id, function (err, result){
    Post.update(result, req.body.post, function(){
      res.redirect(301, "/posts/");
    });
  });
});

module.exports = router;
