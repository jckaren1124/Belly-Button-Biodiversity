//URL to SpaceX is defined
const url = "https://api.spacexdata.com/v2/launchpads";

//placing a call to SpaceX's API, retrieves the data, and prints it to the browser console
//d3.json().then() method ensures the data is received before executing the arrow function
d3.json(url).then(receivedData => console.log(receivedData));

//retrieve full name of the Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

//Skill Drill 12.3.1
//print only the latitude and longitude coordinates of each SpaceX launch station
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(station => station.location.latitude)));
d3.json(url).then(spaceXResults => console.log(spaceXResults.map(station => station.location.longitude)));

