let div1 = document.querySelector("#navBar")

div1.setAttribute("id", "#socialNetworkNavigation")

console.log(div1)

let newLi = document.createElement("li")
let link = document.createElement("a")
link.setAttribute("href", "#")
let textNode = document.createTextNode("Logout")
link.appendChild(textNode);
newLi.appendChild(link)
let list = document.querySelector("ul")
list.appendChild(newLi)

console.log(list.firstElementChild.textContent)
console.log(list.lastElementChild.textContent)