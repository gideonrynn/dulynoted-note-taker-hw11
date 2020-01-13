//this server file runs the application

// Dependencies
const express = require("express");
var path = require("path");

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Data is set up in the db/db.json file

console.log(__dirname);

//Set up our routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

  // Will display all notes
//     app.get("/db", function(req, res) {
//     return res.json(db);
//   });

// Listener
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });