
//path package
var path = require('path');

//function used to export the routes
module.exports = function (app) {
    //the GET route that will display the home page when called
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "./public/home.html"));
    })
    //the GET route that will display the survey when called
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/survey.html"));
    });
};