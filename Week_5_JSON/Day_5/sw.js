const randomButtom = document.querySelector("#randomSearch")
randomButtom.addEventListener("click", getSw)
let loading = document.querySelector(".loading")

let logo = document.querySelector("#logo")
let imageLogo = document.createElement("img")
imageLogo.setAttribute("class", "logo-img")
imageLogo.src = "images/star-wars-512.png"
logo.appendChild(imageLogo)


async function getSw(e){
  e.preventDefault()
  loading.classList.toggle("loading")
  const charDiv = document.querySelector("#charInfo")
  if(charDiv){
    charDiv.remove()
  }

  let min =1
  let max = 83
  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min) + min);
  }
  let number = getRandomArbitrary(min,max)
  try{
    const response = await fetch(`https://www.swapi.tech/api/people/${number}`)
    const data = await response.json()
    const properties = data.result.properties
    const {
      homeworld
    } = properties
    const homeWorld = await getHomeWorld(homeworld)
    displayInfo(properties, homeWorld)
  }catch(err){
    console.log(err)
  }
}


async function getHomeWorld(homeWorldUrl){
  // console.log(homeWorldUrl)
  try{
    const responsePlanet = await fetch(`${homeWorldUrl}`)
    const dataPlanet = await responsePlanet.json()
    const planetName = dataPlanet.result.properties.name
    // console.log(planetName)
    return planetName
  }catch(err){
    console.log(err)
  }
}


function displayInfo(properties, homeWorld) {
  const {
    birth_year,
    gender,
    height,
    name,
  } = properties

  const division = document.querySelector("#displayBox")
  const char = document.createElement("div");
  char.setAttribute("id", "charInfo");
  division.appendChild(char)
  

  const nameChar = document.createElement("p")
  nameChar.setAttribute("class", "nameChar")
  const nameText = document.createTextNode(name);
  nameChar.appendChild(nameText);

  const heightChar = document.createElement("p")
  const heightText = document.createTextNode(`Height: ${height}`);
  heightChar.appendChild(heightText);

  const genderChar = document.createElement("p")
  const genderText = document.createTextNode(`Gender: ${gender}`);
  genderChar.appendChild(genderText);

  const birthday = document.createElement("p")
  const textOne = document.createTextNode(`Birthday: ${birth_year}`);
  birthday.appendChild(textOne);

  const homeWorldP = document.createElement("p")
  const homeText = document.createTextNode(`Homeworld: ${homeWorld}`);
  homeWorldP.appendChild(homeText);
  loading.classList.toggle("loading")
  char.append(nameChar, heightChar, genderChar, birthday, homeWorldP); 
}