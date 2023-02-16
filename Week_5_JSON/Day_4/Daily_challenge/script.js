// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });


// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

let form1 = document.forms.getCity

form1.addEventListener("submit", getAll)

async function getAll(event){
  event.preventDefault()
  try{
    // const cityOne = await getSunriseOne()
    // const cityTwo = await getSunrisetwo()
    // displayInfo(cityOne,cityTwo)
    const[cityOne, cityTwo] = await Promise.all([
      getSunriseOne(),
      getSunrisetwo()
    ])
    displayInfo(cityOne,cityTwo)
  }catch(err){
    const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
    displayInfo("ERROR", errorGif)
  }
}


function displayInfo(cityOne, cityTwo) {
  const container = document.getElementById("container");
  const divCityOne = document.createElement("div");
  const paraCityOne = document.createElement("p")
  const textOne = document.createTextNode(cityOne);
  paraCityOne.appendChild(textOne);
  divCityOne.append(paraCityOne);

  const divCityTwo = document.createElement("div");
  const paraCityTwo = document.createElement("p")
  const textTwo = document.createTextNode(cityTwo);
  paraCityTwo.appendChild(textTwo);
  divCityTwo.append(paraCityTwo);
  container.appendChild(divCityOne);
  container.appendChild(divCityTwo);
}

async function getSunriseOne(){
  let lat = form1.elements.latFirst.value
  let long = form1.elements.longFirst.value
  const responseFirst = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`)
  const data = await responseFirst.json()
  console.log(data)
  return data.results.sunrise
}

async function getSunrisetwo(){
  let lat = form1.elements.latSecond.value
  let long = form1.elements.longSecond.value
  const responseFirst = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`)
  const data = await responseFirst.json()
  console.log(data)
  return data.results.sunrise
}