///////////////////////////////////////////////////////
/////////////////// USER SCHEMA //////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// DEFINING THE SCHEMA
var userSchema = new Schema({
  usernname: String,
  date: String,
  text: String,
  comments: { String }
});

// CREATION OF POSTS MODEL
var User = mongoose.model('User', postsSchema);

// EXPORT THE POSTS MODEL
module.exports = User;
