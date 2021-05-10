// from data.js
var tableData = data;


// select table body here
var tbody = d3.select("tbody"); 

// for each entry, for each tabledata key, append table data to cell, assign table data value to cell 
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Filtering by user input on date
//select the button and form tags from html
var button = d3.select("#filter-btn")
var form = d3.select(".form-group")

// declare and create function to run when form is submitted
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  // //loggin input data to see what user inputed
  // console.log(inputValue);

  var filteredData = tableData.filter(dateInput => dateInput.datetime == inputValue);

  // // console log filter results
  // console.log(filteredData);

  // clearing out the table data html 
  // tbody = d3.select("tbody"); 
  d3.select("tbody").html("");

  // appending filtered data to the now empty table to display to user
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
}




