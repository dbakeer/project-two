///////////////////////////////////////////////////////
/////////////////// POSTS SCHEMA //////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// DEFINING THE SCHEMA
var postsSchema = new Schema({
  title: String,
  author: String,
  content: { String }
});

// CREATION OF POSTS MODEL
var Posts = mongoose.model('Posts', postsSchema);


// EXPORT THE POSTS MODEL
module.exports = Posts;
