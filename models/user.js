///////////////////////////////////////////////////////
/////////////////// USER SCHEMA //////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// DEFINING THE SCHEMA
var userSchema = new Schema({
  name: String,
  info: String,
  password: String,
});


// CREATION OF POSTS MODEL
var User = mongoose.model('User', userSchema);

// EXPORT THE POSTS MODEL
module.exports = User;
