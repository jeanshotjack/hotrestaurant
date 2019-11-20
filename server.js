var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.post("/api/reservations", function(req, res) {
    var newRes = req.body;
    console.log("req.body:");
    console.log(req.body);
    reservations.push(newRes);
    res.json(newRes);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });