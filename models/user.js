// ///////////////////////////////////////////////////////
// /////////////////// USER SCHEMA //////////////////////
// /////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var User = mongoose.model('user', {
  username: { type: String, required: true },
  password: { type: String, required: true },
  votedPosts : [{ _id : mongoose.Schema.Types.ObjectId , votetype: Number }]
  });


// EXPORT THE POSTS MODEL
module.exports = User;
