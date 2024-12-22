"use strict";

var Post = require("../models/postModel");

var Comment = require("../models/commentModel");

exports.createComment = function _callee(req, res) {
  var _req$body, post, user, body, comment, savedComment, updatedPost;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, post = _req$body.post, user = _req$body.user, body = _req$body.body;
          comment = new Comment({
            post: post,
            user: user,
            body: body
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(comment.save());

        case 5:
          savedComment = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(Post.findByIdAndUpdate(post, {
            $push: {
              comments: savedComment._id
            }
          }, {
            "new": true
          }).populate("comments").exec());

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
            error: "Error While Creating comment"
          }));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};
//# sourceMappingURL=commentController.dev.js.map
