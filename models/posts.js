///////////////////////////////////////////////////////
/////////////////// POSTS SCHEMA //////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// DEFINING THE SCHEMA
var newPost = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ body: String, date: { type: Date, default: Date.now}, author: String }],
  date: { type: Date, default: Date.now }
}, { collection: 'posts', strict: false });

var post = mongoose.model('post', newPost);

module.exports = post;
