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

// the actual post action
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
router.get('/:id/edit', function (req, res) {
  var postID = req.params.id;

  Post.findOne({
    _id: postID
  }, function (err, foundPost) {
    if (err) {
      res.write("YOUR POST ID IS BAD");
      res.end();
    } else {
      res.render('posts/edit', {
        posts: foundPost
      });
    }
  });
});

router.patch('/:id', function (req, res) {
  var postID = req.params.id;
  var postParams = req.body.posts;

  Post.findOne({
    _id: postID
  }, function (err, foundPost) {
    if (err) {

    } else {
      foundPost.update(postParams, function (errTwo, post) {
        if (errTwo) {
          console.log("ERROR UPDATING");
        } else {
          console.log("UPDATED!");
          res.redirect(302, "/posts");
        }
      });
    }
  });
});


module.exports = router;
