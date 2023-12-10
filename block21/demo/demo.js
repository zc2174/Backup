// your code here!


async function getPlanets(){
    try {
        const response = await fetch("https://swapi.dev/api/planets/");
        const jsonResponse = await response.json();
        const planets = jsonResponse.results;
        return planets;
    }   catch(err) {
        console.error(err.message);
    }
}

function createElements (planets){
    const list = document.getElementById("planets");
    const planetListItems = planets.map(planet => {
        const planetList = document.createElement("li");
        planetList.textContent = planet.name;
        list.appendChild(planetListItems);
    })
    return planetListItems;
}

async function render(){
    const planets = await getPlanets();
    createElements(planets);
}

render();