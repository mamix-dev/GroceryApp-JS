const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("index");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
