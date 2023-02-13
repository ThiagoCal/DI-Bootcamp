const formEx3 = document.forms.exercise3

const divForm = document.querySelector("#div-form")

formEx3.addEventListener("submit", getForm)

function getForm(event){
  event.preventDefault();
  let data = new FormData(event.target)
  console.log(data)
  let value1 = Object.fromEntries(data.entries()); //transform into an object
  console.log(value1)
  value1 = JSON.stringify(value1)
  let newDiv = document.createElement("div")
  divForm.appendChild(newDiv)
  newDiv.textContent = value1
}