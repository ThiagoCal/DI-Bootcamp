let list = document.getElementsByTagName("ul")

// console.log(list2)

// for(let element of list2.children){
//     console.log(element.textContent)
//     if(element.textContent === "John"){
//         console.log("hello")
//         list2.removeChild(element)
//     }
// }

let li = document.getElementsByTagName("li");

for(let element of li){
    if(element.innerHTML === "John"){
        console.log(element);
        element.setAttribute('style', "display: none;")
    }
    else if(element.innerHTML == "Pete"){
        element.setAttribute('style', "border: 1px solid black;")
    }
}

let body = document.body

body.setAttribute('style', "font-size: 2em");

let division = document.body.firstElementChild
console.log(division);

division.setAttribute('style', "background-color: blue; padding: 1em;")

if(division.hasAttribute('style', "background-color: blue;")){
    // for(let element2 of li){
    //     let x = element2.innerHTML
    //     console.log()
    //     console.log(element2.innerHTML)
    // }
    let array = []
    for (i = 0; i < li.length; i++) { 
        array.push(li[i].innerHTML)
        // console.log(`Hello ${li[0].innerHTML} and ${li[i].innerHTML}`) 
      } 
    alert(`Hello ${array[0]} and ${array[1]}`)
}