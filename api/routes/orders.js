const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " Handling GET request for Orders"
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: " Handling POST request for Orders"
  });
});

router.patch("/", (req, res, next) => {
  res.status(200).json({
    message: " Handling PATCH request for Orders"
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: " Handling DELETE request for Orders"
  });
});

module.exports = router;
