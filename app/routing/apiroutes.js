//===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

var apiroutes = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req);
    var userInput = req.body;
    console.log(req.body);
    var userScoring = userInput.scores;
    var userImage = userInput.image;
var userMatch = {
    Name : "",
    Photo : "",
    totalDifference : 1000
};
    for (var i = 0; i < friendData.length; i++) {
      var difference = 0;

      for (var j = 0; j < userScoring.length; j++) {
        difference += Math.abs(friends[i].scores[j] - userScoring[j]);
      }
     
      if (difference < userMatch.totalDifference) {
        userMatch.totalDifference = difference;
        userMatch.Name = friends[i].name;
        userMatch.Photo = friends[i].photo;
      }
    }

  friendData.push(userInput);


    res.json(userMatch);
  });
};

module.exports = apiroutes;