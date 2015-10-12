///////////////////////////////////////////////////////
/////////////////// USER SCHEMA //////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// DEFINING THE SCHEMA
var newUser = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  info: String
}, { collection: 'user', strict: false });

// CREATION OF POSTS MODEL
var user = mongoose.model('user', newUser);

// EXPORT THE POSTS MODEL
module.exports = user;
