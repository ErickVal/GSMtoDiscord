require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use(require("./routes/index"));

app.listen(5001, function () {
  console.log(`Listening on port ${5001}...`);
});

module.exports = app;