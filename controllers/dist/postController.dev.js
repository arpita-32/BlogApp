"use strict";

var Post = require("../models/postModel");

exports.createPost = function _callee(req, res) {
  var _req$body, title, body, post, savedPost;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, title = _req$body.title, body = _req$body.body;
          post = new Post({
            title: title,
            body: body
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(post.save());

        case 5:
          savedPost = _context.sent;
          res.json({
            post: savedPost
          });
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(400).json({
            error: "Error while creating post"
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.getAllPosts = function _callee2(req, res) {
  var posts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(P);

        case 3:
          posts = _context2.sent;
          _context2.next = 8;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
};
//# sourceMappingURL=postController.dev.js.map
