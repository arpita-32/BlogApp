const express = require("express");
const router = express.Router();

const {dummyLink} = require("../controllers/LikeController");
const {createComment} = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");

router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);

module.exports = router;