// ///////////////////////////////////////////////////////
// /////////////////// USER SCHEMA //////////////////////
// /////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var User = mongoose.model('user', {
  username: { type: String, required: true },
  password: { type: String, required: true },
  subs: [{ type: String }]
  });


// EXPORT THE POSTS MODEL
module.exports = User;
