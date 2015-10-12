///////////////////////////////////////////////////////
/////////////////// USER SCHEMA //////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// DEFINING THE SCHEMA
var userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  info: String
});

// CREATION OF POSTS MODEL
var User = mongoose.model('User', userSchema);

// EXPORT THE POSTS MODEL
module.exports = User;
