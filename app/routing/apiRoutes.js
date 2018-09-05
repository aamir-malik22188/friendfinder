// This document is for GET and POST Requests from the Survey

// GET results based on the User input
 $.get("/api/friends/" + friendsAr, function(data) {
    console.log(data);
    if (data) {
      $("#stats").show();
      $("#name").text(data.name);
      $("#role").text(data.role);
      $("#age").text(data.age);
      $("#force-points").text(data.forcePoints);
    }
    else {
      $("#name").text("The force is not strong with this one. Your character was not found.");
      $("#stats").hide();
    }
  });


// POST results that match the users input.
 $.post("/api/friends", userInput, function(){


 })
 
 

