function makeJuice(size){
  const ingredients = []
  function addIngredients(firstIng, secondIng, thirdIngr){
    ingredients.push(firstIng, secondIng, thirdIngr)
  }
  
  function displayJuice(){
    let container = document.querySelector("#container");
    let sentence = `The client wants a ${size} juice, containing: `
    ingredients.forEach((element, index, array) => {
      if(index === array.length-1){
        sentence += `and ${element}.`
      }else{
        sentence += `${element}, `
      }
    })
    const text = document.createTextNode(sentence)
    container.appendChild(text)
  }

  addIngredients("apple", "orange", "pinapple")
  addIngredients("banana", "milk", "sugar")
  displayJuice()
}

makeJuice("Medium")