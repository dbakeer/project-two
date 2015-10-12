///////////////////////////////////////////////////////
/////////////////// POSTS SCHEMA //////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var express  = require('express'),
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// DEFINING THE SCHEMA
var postsSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ body: String, date: { type: Date, default: Date.now}, author: String }],
  date: { type: Date, default: Date.now }
});

// CREATION OF POSTS MODEL
var Posts = mongoose.model('Posts', postsSchema);


// EXPORT THE POSTS MODEL
module.exports = Posts;
