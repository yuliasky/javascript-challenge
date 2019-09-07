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
  
var button = d3.select("#filter-btn");
button.on("click", function() {

//     // Select the input element and get the raw HTML node
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
    
      var cityElement = d3.select("#cityname");
      var cityValue = cityElement.property("value").trim().toLowerCase();
      console.log(cityValue)
      if(cityValue){
        var filtercity = filterdate.filter(ufo => ufo.city === cityValue);
        var tbody = d3.select("tbody");
        tbody.html("");
        filtercity.forEach((ufos) => {
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
        filtercity = filterdate;
        filtercity.forEach((ufos) => {
          var row = tbody.append("tr");
           Object.entries(ufos).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            });
          })
        }; 

        var stateElement = d3.select("#statename");
        var stateValue = stateElement.property("value").trim().toLowerCase();
        console.log(stateValue)
        if(stateValue){
          var filterstate = filtercity.filter(ufo => ufo.state === stateValue);
          var tbody = d3.select("tbody");
          tbody.html("");
          filterstate.forEach((ufos) => {
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
          filterstate = filtercity;
          filterstate.forEach((ufos) => {
            var row = tbody.append("tr");
             Object.entries(ufos).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
              });
            })
          }; 
          var countryElement = d3.select("#countryname");
          var countryValue = countryElement.property("value").trim().toLowerCase();
          console.log(countryValue)
          if(countryValue){
            var countrystate = filterstate.filter(ufo => ufo.country === countryValue);
            var tbody = d3.select("tbody");
            tbody.html("");
            countrystate.forEach((ufos) => {
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
            countrystate = filterstate;
            countrystate.forEach((ufos) => {
              var row = tbody.append("tr");
               Object.entries(ufos).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
                });
              })
            }; 

            var shapeElement = d3.select("#shapename");
            var shapeValue = shapeElement.property("value").trim().toLowerCase();
            console.log(shapeValue)
            if(shapeValue){
              var shapestate = countrystate.filter(ufo => ufo.shape === shapeValue);
              var tbody = d3.select("tbody");
              tbody.html("");
              shapestate.forEach((ufos) => {
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
              shapestate = countrystate;
              shapestate.forEach((ufos) => {
                var row = tbody.append("tr");
                 Object.entries(ufos).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                  });
                })
              };
  });
      


 
