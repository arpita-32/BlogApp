"use strict";

var express = require('express');

var router = express.Router(); // Import Controller 

var _require = require("../controllers/commentController"),
    createComment = _require.createComment;

var _require2 = require("../controllers/postController"),
    createPost = _require2.createPost,
    getAllPosts = _require2.getAllPosts;

var _require3 = require("../controllers/likeController"),
    likePost = _require3.likePost,
    unlikePost = _require3.unlikePost; // Mapping Create


router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost); // Export Controller

module.exports = router;
//# sourceMappingURL=blog.dev.js.map
