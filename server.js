const express = require("express")
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
// Parse Application
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Call Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Set Routes
var routes = require("./controllers/catsController.js");
app.use(routes);

app.listen(PORT, function() {
    //Console check for listen
    console.log("Server listening on: http://localhost:" + PORT);
  });
