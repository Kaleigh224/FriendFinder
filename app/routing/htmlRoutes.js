var path = require("path");

module.exports = function(app){
// GET route to display the survey page
app.get("/survey", function(req, res) {
    console.log("KH1")
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
};