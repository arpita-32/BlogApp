"use strict";

var mongoose = require("mongoose");

var likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  user: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Like", likeSchema);
//# sourceMappingURL=likeModel.dev.js.map
