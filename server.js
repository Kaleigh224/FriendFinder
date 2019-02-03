var express = require("express");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Default, catch-all route that leads to home.html & displays home page

// Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});