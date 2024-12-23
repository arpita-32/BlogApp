"use strict";

// Import Models
var Post = require("../models/postModel");

var Like = require("../models/likeModel");

var _require = require("express"),
    response = _require.response; // Like a Post


exports.likePost = function _callee(req, res) {
  var _req$body, post, user, like, savedLike, updatedPost;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, post = _req$body.post, user = _req$body.user;
          like = new Like({
            post: post,
            user: user
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(like.save());

        case 5:
          savedLike = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(Post.findByIdAndUpdate(post, {
            $push: {
              likes: savedLike._id
            }
          }, {
            "new": true
          }).populate("likes").exec());

        case 8:
          updatedPost = _context.sent;
          res.json({
            post: updatedPost
          });
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            error: "Error While Like Post"
          }));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}; // Unlike a Post


exports.unlikePost = function _callee2(req, res) {
  var _req$body2, post, like, deletedLike, updatedPost;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, post = _req$body2.post, like = _req$body2.like; // find and delete the from like collection

          _context2.next = 4;
          return regeneratorRuntime.awrap(Like.findOneAndDelete({
            post: post,
            _id: like
          }));

        case 4:
          deletedLike = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(Post.findByIdAndUpdate(post, {
            $pull: {
              likes: deletedLike._id
            }
          }, {
            "new": true
          }));

        case 7:
          updatedPost = _context2.sent;
          res.json({
            post: updatedPost
          });
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            error: "Error While unLike Post"
          }));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};
//# sourceMappingURL=LikeController.dev.js.map
