const solarSystem = [
    {
        planetName: "Earth",
        color: "blue",
        moon: 1,
    },
    {
        planetName: "Jupiter",
        color: "red",
        moon: 3,
    },
    {
        planetName: "Mercury",
        color: "yellow",
        moon: 7,
    }
]

function addPlanets(){
    const section = document.querySelector(".listPlanets")
    for(let planet of solarSystem){
        console.log(planet["planetName"])
        const planetDiv = document.createElement("div")
        const content = document.createTextNode(planet["planetName"])
        const classEachPlanet = planet["planetName"].toLocaleLowerCase()
        planetDiv.classList.add("planet", classEachPlanet)
        planetDiv.appendChild(content);
        
        for(let i = 1; i <= planet["moon"]; i++){
            const moonDiv = document.createElement("div");
            moonDiv.classList.add("moon");
            planetDiv.appendChild(moonDiv)
            moonDiv.style.left = `${20*i}px`
        }
        section.appendChild(planetDiv)
    }
}

addPlanets()