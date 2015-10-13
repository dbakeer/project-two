// ///////////////////////////////////////////////////////
// /////////////////// USER SCHEMA //////////////////////
// /////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var User = mongoose.model('user', {
  name: { type: String, required: true },
  password: { type: String, required: true },
  info: { type: String, required: true },
  });


// EXPORT THE POSTS MODEL
module.exports = User;
