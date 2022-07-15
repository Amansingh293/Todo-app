const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");

var items = [];

app.use(express.static("public"));

app.get("/", function(req, res) {

  var options = {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric"
  };

  var today = new Date();

  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {kindOfDay: day, newtodo: items});

});

app.post("/", function(req, res){
  res.redirect("/");
  items.push(req.body.newItem);
});


app.listen(process.env.PORT || 3000, function() {

  console.log("server is running on port 3000");
});
