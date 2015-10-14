///////////////////////////////////////////////////////
/////////////////// POSTS SCHEMA /////////////////////
/////////////////////////////////////////////////////

// MONGOOSE NONSENSE
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;


var Post = mongoose.model('posts', {
  username: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ body: String, date: { type: Date, default: Date.now}, username: String }],
  date: { type: Date, default: Date.now },
  vote: { type: Number, default: 0 }
});



module.exports = Post;
