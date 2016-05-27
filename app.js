$(document).ready(function (){
  
  $.ajax ({
    type: "GET",
    url: "https://myapi.profstream.com/api/4a55ee/wines",
    success: function(wines) {
      // console.log(wines);
      
      console.log("Wine's name is " + wines[0].name + ".");
      console.log("Wine's vintage year is " + wines[0].year + ".");
      console.log("Wine's grape is " + wines[0].grapes + ".");
      console.log("Wine's is country is " + wines[0].country + ".");
      console.log("Wine's is region is " + wines[0].region + ".");
      console.log("Wine's is description is " + wines[0].description + ".");
      console.log("Wine's is price is $" + wines[0].price + ".00.");
      
      console.log("Wine's name is " + wines[1].name + ".");
      console.log("Wine's vintage year is " + wines[1].year + ".");
      console.log("Wine's grape is " + wines[1].grapes + ".");
      console.log("Wine's is country is " + wines[1].country + ".");
      console.log("Wine's is region is " + wines[1].region + ".");
      console.log("Wine's is description is " + wines[1].description + ".");
      console.log("Wine's is price is $" + wines[1].price + ".00.");
      
      console.log("Wine's name is " + wines[2].name + ".");
      console.log("Wine's vintage year is " + wines[2].year + ".");
      console.log("Wine's grape is " + wines[2].grapes + ".");
      console.log("Wine's is country is " + wines[2].country + ".");
      console.log("Wine's is region is " + wines[2].region + ".");
      console.log("Wine's is description is " + wines[2].description + ".");
      console.log("Wine's is price is $" + wines[2].price + ".00.");
      
      console.log("Wine's name is " + wines[3].name + ".");
      console.log("Wine's vintage year is " + wines[3].year + ".");
      console.log("Wine's grape is " + wines[3].grapes + ".");
      console.log("Wine's is country is " + wines[3].country + ".");
      console.log("Wine's is region is " + wines[3].region + ".");
      console.log("Wine's is description is " + wines[3].description + ".");
      console.log("Wine's is price is $" + wines[3].price + ".00.");
      
      console.log("Wine's name is " + wines[4].name + ".");
      console.log("Wine's vintage year is " + wines[4].year + ".");
      console.log("Wine's grape is " + wines[4].grapes + ".");
      console.log("Wine's is country is " + wines[4].country + ".");
      console.log("Wine's is region is " + wines[4].region + ".");
      console.log("Wine's is description is " + wines[4].description + ".");
      console.log("Wine's is price is $" + wines[4].price + ".00.");
      
      console.log("Wine's name is " + wines[5].name + ".");
      console.log("Wine's vintage year is " + wines[5].year + ".");
      console.log("Wine's grape is " + wines[5].grapes + ".");
      console.log("Wine's is country is " + wines[5].country + ".");
      console.log("Wine's is region is " + wines[5].region + ".");
      console.log("Wine's is description is " + wines[5].description + ".");
      console.log("Wine's is price is $" + wines[5].price + ".00.");
      
      console.log("Wine's name is " + wines[6].name + ".");
      console.log("Wine's vintage year is " + wines[6].year + ".");
      console.log("Wine's grape is " + wines[6].grapes + ".");
      console.log("Wine's is country is " + wines[6].country + ".");
      console.log("Wine's is region is " + wines[6].region + ".");
      console.log("Wine's is description is " + wines[6].description + ".");
      console.log("Wine's is price is $" + wines[6].price + ".00.");
      
      console.log("Wine's name is " + wines[7].name + ".");
      console.log("Wine's vintage year is " + wines[7].year + ".");
      console.log("Wine's grape is " + wines[7].grapes + ".");
      console.log("Wine's is country is " + wines[7].country + ".");
      console.log("Wine's is region is " + wines[7].region + ".");
      console.log("Wine's is description is " + wines[7].description + ".");
      console.log("Wine's is price is $" + wines[7].price + ".00.");
      
    },
    error: function () {
      alert("Error getting wines");
    }
  });
  
});

