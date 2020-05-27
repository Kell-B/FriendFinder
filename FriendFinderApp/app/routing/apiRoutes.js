//requiring the data from the friends array
var friends = require('../data/friends.js');

//function for exporting our api route info
module.exports = function (app) {

    //the GET route that will display the JSON of the friends array
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //the POST route that will take in the survey results
    app.post("/api/friends", function (req, res) {
        //var to store scores from the survey
        var friendScore = req.body.scores;
        //an empty array to store the results
        var scoresArr = [];
        //int var to store the best match
        var bestMatch = 0;

        //for loop that will run through the friends array on friends.js page
        for (var i = 0; i < friends.length; i++) {
            //a variable to hold the total difference
            var total = 0;
            //for loop to run through the friendScore array
            for (var z = 0; z < friendScore.length; z++) {
                //subtracting the user score from the friend score, making it positive, and adding it to the total
                total += (Math.abs(parseInt(friends[i].scores[z]) - parseInt(friendScore[z])));
            }
            //pushing the total to the empty array
            scoresArr.push(total);
        }
        //for loop that will run through the arrays and compares the results to determine the best match
        for (var x = 0; x < scoresArr.length; x++) {
            if (scoresArr[x] <= scoresArr[bestMatch]) {
                bestMatch = x;
            }
        }
        //var to store best match result
        var best = friends[bestMatch];
        //returning the result
        res.json(best);
        //pushing the new results to the friends array
        friends.push(req.body);
    });
};