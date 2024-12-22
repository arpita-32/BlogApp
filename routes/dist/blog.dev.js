"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/LikeController"),
    dummyLink = _require.dummyLink;

var _require2 = require("../controllers/commentController"),
    createComment = _require2.createComment;

var _require3 = require("../controllers/postController"),
    createPost = _require3.createPost;

router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
module.exports = router;
//# sourceMappingURL=blog.dev.js.map
