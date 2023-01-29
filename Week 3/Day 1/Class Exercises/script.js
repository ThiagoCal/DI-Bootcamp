let division = document.body.firstElementChild
console.log(division);

let list = document.body.children[1]
console.log(list);

let pete = list.lastElementChild.textContent
console.log(pete);

let container = document.getElementById('container')
console.log(container)


let lists = document.querySelectorAll('.list')
console.log(lists)

for(let list of lists){
    let listName = list.firstElementChild
    listName.innerHTML = "Thiago"
    console.log(list.textContent)
    console.log(list)
    list.classList.add("students_list")
    for (const child of list.children) {
       if(child.innerHTML === "Sarah"){
        list.removeChild(child)
       };
    }
}

lists[0].classList.add("university","attendance")


division.setAttribute('style', "background-color: blue; padding: 1em;")

