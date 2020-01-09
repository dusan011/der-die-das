const express = require("express");
const app = express();
const morgan = require("morgan");

const wordRoutes = require("./api/routes/words");

app.use(morgan("dev"));

app.use("/api/words", wordRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
