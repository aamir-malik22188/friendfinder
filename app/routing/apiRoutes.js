// This document is for GET and POST Requests from the Survey
var path = require('path');
var friends = require('../data/friend.js')

// GET data fron the friends.js file
 app.get("/api/friends", function(data) {
   res.sendFile(friends);
  });


// POST results that match the users input.
app.post('/api/friends', userInput)
    .done(function(data) {
  
  var userInput = req.params.body;
  var userInfo = userInput.scores;

  var newFriend = "";
  var newFriendImage = "";

 //JS for friends.js file
 for(var i = 0; i < friends.length; i++){
   var difference = 0;
   for(var j = 0; j < userInfo.length; j++){
     difference = math.abs(friends[i].scores[j]-userInfo[j]);
   }
 }



 //  Pop open the modal dialog
 $('#modal1').modal('open');
});

