$(document).ready(function (){

  $.ajax ({
    type: "GET",
    url: "https://myapi.profstream.com/api/4a55ee/wines",
    success: function(users) {
      console.log(users);

      //copy update on Arun's instructions
    //   console.log (users[0].firstname + users[0].lastname + "'s user name is " + users[0].username + "and their email is " + users[0].email);
    // },
    // error: function () {
    //   alert("Error getting data");
    // }
  });
});

});
