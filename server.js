//this server file runs the application

// ** Dependencies ** //
const express = require("express");
const path = require("path");


// ** Express Setup ** //

// Sets up express and port for localhost
const app = express();
const PORT = 3000;

// Sets up express to handle data parsing, including assets
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// ** Routing **//
//Point to the route files, which both contain functions that take the app variable for express
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// ** Listener ** //
// Set up listener at 3000
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});