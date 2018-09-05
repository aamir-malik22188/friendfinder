//Package for Path (Possibly use Exports)
var path = require('path')

//Route for main page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

//Route for survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });