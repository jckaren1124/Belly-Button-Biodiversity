// from plots.js
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Skill Drill 12.1.2 Practice
Plotly.newPlot("plotArea", [{x: [10, 20, 30], y: [1, 2, 3]}]);

//Skill Drill 12.1.3 Bar Chart
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var layout = {
    title: "Nonalcoholic Drink Popularity",
    xaxis: {title: "Nonalcoholic Beverage"},
    yaxis: {title: "Ordered Percentage"}
};

Plotly.newPlot("plotArea", [trace], layout);

//Skill Drill 12.2.1 map() method-numeric
var numbers = [0,2,4,6,8];
var addFive = numbers.map(number => number+5);
console.log(addFive);

//Skill Drill 12.2.1 map() method-extract specific property from an array
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPopulation = cities.map(function(city){
    return city.population;
});
console.log(cityPopulation);

//Skill Drill 12.2.1 filter() method--doesn't print out the sNameAnimals??
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sNameAnimals = words.filter(function(word){
    return word == "s";
});

//Skill Drill 12.2.1 slice() method
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice1 = words.slice(0,3);
console.log(slice1)