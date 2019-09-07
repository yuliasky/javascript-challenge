// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//var cell = d3.select("td");
//cell.text("No data for selected date");  

// YOUR CODE HERE!

tableData.forEach((ufos) => {
  var row = tbody.append("tr");
   Object.entries(ufos).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  });
  
//Values initails 

datebool = false;
citybool = false;
statebool = false;
countrybool = false;
shapebool = false; 

// Select the button
var button = d3.select("#filter-btn");


button.on("click", function() {

    // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    var dateValue = dateElement.property("value").trim();
    console.log(dateValue)
    if(dateValue){
      var filterdate = tableData.filter(ufo => ufo.datetime === dateValue);
      var tbody = d3.select("tbody");
      tbody.html("");
      filterdate.forEach((ufos) => {
           var row = tbody.append("tr");
           Object.entries(ufos).forEach(([key, value]) => {
             var cell = row.append("td");
             cell.text(value);
            });
          });
        }  
    else     {
      var tbody = d3.select("tbody");
      tbody.html("");
      filterdate = tableData;
      filterdate.forEach((ufos) => {
        var row = tbody.append("tr");
         Object.entries(ufos).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          });
        })
      };
         

    

}); 
  
