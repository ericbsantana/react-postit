const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
var cors = require("cors");
const path = require("path");

const port = process.env.PORT || 3001;

const postitRoute = require("./routes/postit");

const app = express();

mongoose.connect(db.uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

if (process.env.NODE_ENV !== "production") {
  app.use(function (req, res, next) {
    setTimeout(next, 500);
  });
  app.use(cors());
}

app.use(express.json());
app.use(postitRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Thank you for running me! I'm running on port " + port);
});
