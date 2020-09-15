const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

mongoose.connect("mongodb://localhost:27017/grocery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

let postSchema = new mongoose.Schema({
  name: String,
  description: String,
  address: String,
});

let Post = mongoose.model("Post", postSchema);

let newPost = {
  name: "Dominoes",
  description: "Heading out to dominoes for a late night snack",
  address: "123456 Dominoes Street, Raleigh, NC, 27616",
};

Post.create(newPost, (err, newlyCreated) => {
  if (err) {
    console.log(err);
  } else {
    console.log(newlyCreated);
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
