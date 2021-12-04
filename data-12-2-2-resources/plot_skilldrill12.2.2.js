//Create a Bar Chart of the Seven Largest Cities by Population

//sort city population from highest to lowest-sort() method
var sortedCities = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

//select the top 7 cities-slice() method
var topSevenCities = sortedCities.slice(0,7);

//create arrays of city names and corresponding population growths-map() method
var topSevenCityNames = cityGrowths.map(city => city.City);
var topSevenCityPopulation = cityGrowths.map(city => parseInt(city.population));

//create a bar chart with the arrays-plotly.newPlot()
var trace = {
    x: topSevenCityNames,
    y: topSevenCityPopulation,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Seven Largest Cities by Population",
    xaxis: {title: "City" },
    yaxis: {title: "2017 Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);