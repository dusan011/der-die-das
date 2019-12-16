const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET Request"
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST Request"
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling DELETE Request"
  });
});

router.patch("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling PATCH Request"
  });
});

module.exports = router;
