
module.exports = function (app) {
    var friends = require("../data/friends.js")
    // GET route with url /api/friends
    // JSON to display all possible friends

    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    })


    // POST route to /api/friends to handle incoming survey results
    // This route will handle the compatibility logic

    app.post("/api/friends", function (req, res) {
        var compatibility = req.body
        var smallestDifference = 50;
        var bestMatch = {};
        console.log(compatibility)
        friends.forEach(function (friend) {
            var totalDifference = 0;
            console.log(friend.scores[0])
            for (var i = 0; i < friend.scores.length; i++) {
                totalDifference += Math.abs(friend.scores[i] - compatibility.scores[i])
            }
            if(totalDifference < smallestDifference) {
                smallestDifference = totalDifference
                bestMatch = friend
            } 
        })
        res.json(bestMatch)
        friends.push(compatibility)
    })
};