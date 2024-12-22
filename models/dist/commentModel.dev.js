"use strict";

var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  user: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Comment", commentSchema);
//# sourceMappingURL=commentModel.dev.js.map
