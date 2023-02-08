

const buttonFirst = document.querySelector("#btn-first")
const buttonSecond = document.querySelector("#btn-second")

function changeColor(e){
    console.log(e.target.innerHTML)
    let color = e.target.innerHTML.toLowerCase()
    let body = document.body.style
    body["background-color"] = color
}

buttonFirst.addEventListener("click", changeColor)
buttonSecond.addEventListener("click", changeColor)


// Exercise 2 - using the event object
const colors = ["blue", "yellow", "green", "pink"];
let body = document.body
const division = document.createElement("div")
division.classList.add("container")
for(i = 0; i < colors.length; i++){
    const button = document.createElement("button")
    button.innerHTML = colors[i]
    button.addEventListener("click", changeColor)
    division.appendChild(button)
}
body.appendChild(division)



// Add inside the HTML file a div of id "container" (do it directly in
//  the HTML)
// Using a loop, add one button per color inside the div container 
// (do it directly in the JS)
// Each button should have an "click" 
// event listener that changes the background color of the document, 
// to the color of the button (do it directly in the JS)


