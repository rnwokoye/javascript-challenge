// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js

// YOUR CODE HERE!
var tbody = d3.select("tbody"); 

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


var button = d3.select("#filter-btn")
var form = d3.select(".form-group")

button.on("click", runEnter);
form.on("submit", runEnter);


function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);


  var filteredData = tableData.filter(dateInput => dateInput.Date == inputValue);

  console.log(filteredData); 


}

// function handleIt() {
//     // console.log("text has changed");
//     // console.log("This is this", this); 
//     var searchDate = d3.event.target;
//     var searchDate2 = d3.select(this);

//     console.log("this is data", searchDate);
//     console.log("this is This", searchDate2);

//     // var searchDate2Text = searchDate2.text();
//     // console.log(searchDate2Text);
// };

// dateInput.on("change", handleIt);





