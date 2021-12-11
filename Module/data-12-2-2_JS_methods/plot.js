//Create a Bar Chart of Five Cities with Highest Population Increase from 2016-2017

//sort city population growth from highest to lowest-sort() method
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

//select the top 5 cities-slice() method
var topFiveCities = sortedCities.slice(0,5);

//create arrays of city names and corresponding population growths-map() method
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

//create a bar chart with the arrays-plotly.newPlot()
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);



