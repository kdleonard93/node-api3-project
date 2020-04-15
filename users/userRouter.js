const express = require("express");
const logger = require("../middleware/logger.js");
const validateUserId = require("../middleware/validateUserId");
const validateUser = require("../middleware/validateUser");
const validatePost = require("../middleware/validatePost");

const Users = require("./userDb");
const Posts = require("../posts/postDb");

const router = express.Router();

router.post("/", (req, res) => {
  // do your magic!
  Users.insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error creating user",
      });
    });
});

router.post("/:id/posts", (req, res) => {
  // do your magic!
  req.body.user_id = req.user.id;
  Posts.insert(req.body)
    .then((posted) => {
      Posts.getById(posted.id)
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          res.status(500).json({
            errorMessage: "cannot retrieve newly made post",
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Error creating new post",
      });
    });
});

router.get("/", (req, res) => {
  // do your magic!
});

router.get("/:id", (req, res) => {
  // do your magic!
});

router.get("/:id/posts", (req, res) => {
  // do your magic!
});

router.delete("/:id", (req, res) => {
  // do your magic!
});

router.put("/:id", (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
