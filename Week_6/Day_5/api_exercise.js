let division = document.querySelector("#container");
let buttonRandom = document.querySelector(".btn-random");
buttonRandom.addEventListener("click", catFact)

async function catFact(){
  try{
    let response = await fetch("https://catfact.ninja/fact");
    let data = await response.json()
    console.log(data.fact)
    displayFact(data.fact);
  }
  catch(err){
    console.log("erro fetching the data")
  }
}

function displayFact(data){
  let factDivision = document.querySelector("#factD")
  if(factDivision){
    factDivision.remove()
  }
  let factDiv = document.createElement("div")
  factDiv.setAttribute("id", "factD")
  division.appendChild(factDiv);
  let factP = document.createElement("p")
  let factText = document.createTextNode(data)
  factP.appendChild(factText)
  factDiv.appendChild(factP)
}