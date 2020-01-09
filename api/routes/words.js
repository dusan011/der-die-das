const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Listing all words"
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Adding word"
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "Deleting a single word"
  });
});

router.patch("/", (req, res, next) => {
  res.status(200).json({
    message: "Editing a single word"
  });
});

module.exports = router;
