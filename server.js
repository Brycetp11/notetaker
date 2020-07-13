var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const routeHTML = require('./controllers/routeHTML');
app.use(routeHTML);

const routeAPI = require('./controllers/routeAPI');
app.use(routeAPI);

app.listen(PORT, function (){
    console.log("listening on PORT" + PORT);
});