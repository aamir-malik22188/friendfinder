// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express setup
var app = express();
var PORT = process.env.PORT || 8080;

//Parse content
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// PORT Listener
app.listen(PORT, function(){
    console.log("Listening on http:localhost:"+ PORT);
});