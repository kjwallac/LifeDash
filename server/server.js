const express = require("express");
const app = express();
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 5000;
const dbserver = process.env.MONGOD_URI || "mongodb://localhost/lifedash_db";

// Middleware
app.use(compression());
app.use(express.json());
app.use(express.static("public"));

// Mongoose Connect
mongoose.connect(dbserver, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Routes here
app.use(require("./controllers"));

// Server start
app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  console.log(`Server listening on port ${PORT}`);
});
