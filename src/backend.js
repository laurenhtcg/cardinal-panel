/* Importing Libraries */
var express = require("express");
var bodyParser = require('body-parser');

/* Express Step 1: Creating an express application */
var app = express();
//set port 
var port = 3000;

/* Express Step 2: Start Server */
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

// Express Step 3: Use body-parser library to help parse incoming request bodies
app.use(bodyParser.json());

/* This is included because its allows extenion to run external javascript. 
If you are interested in learning more, check out: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  // Note that the origin of an extension iframe will be null
  // so the Access-Control-Allow-Origin has to be wildcard.
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
