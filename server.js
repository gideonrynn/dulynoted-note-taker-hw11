//this server file runs the application

// Sets up dependencies
const express = require("express");
const path = require("path");
// const fs = require('fs');
const index = require("./routes/htmlRoutes")


// Sets up express on port for localhost
const app = express();
const PORT = 3000;

// Sets up  express to handle data parsing, including assets
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Data is set up in the db/db.json file

//Point to the route files, which both contain functions that take the app variable for express
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});