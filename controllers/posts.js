var express = require('express'),
    router  = express.Router(),
    Posts   = require('../models/posts.js'),
    Users   = require('../models/user.js');

// Post-based Routes

router.get('/', function (req, res){
  res.render('posts/index');
});

router.post('/posts', function (req, res){

});

router.get('/new', function (req, res){
  res.render('posts/new');
});


module.exports = router;
