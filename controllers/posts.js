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
        posts: allPosts,
        currentUser: req.session.currentUser
      });
    }
  });
});

// link in current user session
router.get('/new', function (req, res) {
  if (req.session.currentUser) {
    res.render('posts/new', {
      currentUser: req.session.currentUser
    });
  } else {
    res.redirect(302, '../user/new');
  }
});

// show individual post
router.get('/:id', function (req, res){
  if (req.session.currentUser) {
    Post.findById(req.params.id, function (err, result) {
      res.render('posts/show', {
        posts: result,
        currentUser: req.session.currentUser
      });
    });
  } else {
    res.redirect(302, '../user/new');
  }
});

// the actual post action
router.post('/', function (req, res){
  var posts = new Post(req.body.posts);
  posts.username = req.session.currentUser;
  posts.save(function (err, newPost){
    if (err){
      res.redirect(302, 'posts/new');
    } else {
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
  Post.findById(req.params.id, function (err, foundPost) {
    res.render('posts/edit', {
      posts: foundPost,
      currentUser: req.session.currentUser
    });
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

// comments
router.post('/:id', function (req, res) {
  var newComment = req.body.posts;

  newComment.comments.username = req.session.currentUser;
  newComment.comments.date = Date.now();
  console.log(newComment);

  Post.update(
    {_id: req.params.id},
    {$push: newComment},
    function (){
    (res.redirect('/posts/')
    );
  });
});

module.exports = router;
