var express = require("express");
var path = require("path");

//Express setup
var app = express();
var PORT = process.env.PORT || 3000;

//parsing data for json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Listening for server port
app.listen(PORT, function () {
    console.log("Server listening on PORT " + PORT);
});