# Block 21: Async Await Demo

## Objective
Fetch all of the planets from the Starwars API (https://swapi.dev/) and display the names of the planets in an unordered list. The ul already exists in the html file with an id of "planets".

## Steps:
* Create an asynchronous function ```getPlanets``` that uses the JavaScript fetch API to GET all of the planets from the Starwars API and stores those planets to a variable (const planets = ...)
* Create a function ```createElements``` that loops through the planets, create an ```<li>``` for each planet, and append it to the unordered list
* Create a ```render``` function that first calls the ```getPlanets``` function, then passes the result of that function call into the ```createElements``` function
* Call the ```render``` function
* Create an asynchronous function ```createPlanet``` that would POST a new planet to the API and return the result if the API supported the POST functionality (this is to prepare for the guided practice and workshop)
