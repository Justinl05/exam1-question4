 //jshint esversion:6

// fill in your code here...

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});


app.post("/", function(req, res){

//converts the string input to a float number
  var radius = Number(req.body.n1);

// does the computation of the input variables, as numbers
  var area = Math.PI * (radius * radius)
  var circum = 2 * Math.PI * radius

//display the result in 2 decimal places
res.send("Area of the Circle is " + area.toFixed(2) + " and the Circumference of the Circle is " + circum.toFixed(2));

})


//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});