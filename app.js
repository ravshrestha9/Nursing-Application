var express = require("express");
var dbConnection = require("./db-connection.js");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "scripts"));
app.use(express.static(__dirname + "styles"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

connection = dbConnection.connect();

app.get("/", function(req, res) {
  res.sendFile(__dirname + + '/index.html');
  connection.query("SELECT * FROM pet", function(err, rows, fields) {
    if (!err) {
      console.log("Success");
    } else {
      console.log("Error while performing Query.");
    }
  });
});

app.listen(3000, function(err){
  console.log(err);
});
