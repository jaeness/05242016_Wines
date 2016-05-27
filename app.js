$(document).ready(function (){

  $.ajax ({
    type: "GET",
    url: "https://myapi.profstream.com/api/4a55ee/wines",
    success: function(users) {
      console.log(users);

      //copy update on Arun's instructions
    //   console.log (users[0].firstname + users[0].lastname + "'s user name is " + users[0].username + "and their email is " + users[0].email);
    // error: function () {
    //   alert("Error getting data");
    // }

    console.log ("The wine’s name is " + wines[0].name + ".  The vintage year is " + wines[0].year + ". It is from "  wines[0].country + " " + wines[0].region + " made of " + wines[0].grapes + "grapes.  It is described as" + wines[0].description + ".  The cost is $" + wines[0].price + ".");

  },
  error: function () {
    alert("Error getting data");
  }
});
});
