///////////////////////////////////////////////////////
/////////////////// POSTS SCHEMA //////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// DEFINING THE SCHEMA
var postsSchema = Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ body: String, date: { type: Date, default: Date.now}, author: String }],
  date: { type: Date, default: Date.now }
});

var Posts = mongoose.model("Posts", postsSchema);


// EXPORT THE POSTS MODEL
module.exports = Posts;
