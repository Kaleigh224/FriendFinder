
module.exports = function(app) {
    var friends = require("../data/friends.js")
// GET route with url /api/friends
// JSON to display all possible friends

app.get("/api/friends", function(req, res) {
    return res.json(friends)
})


// POST route to /api/friends to handle incoming survey results
// This route will handle the compatibility logic

app.post("/api/friends", function(req, res) {
    var compatibility = req.body
    console.log(compatibility)
    // "".push(compatibility);
    res.json(compatibility)
})
};