let form = document.forms[0]

console.log(form)

let inputFName = document.getElementById("fname")
let inputLName = document.getElementById("lname")
console.log(inputFName)
console.log(inputLName)

let inputFirstName = form.elements.fname
let inputLastName = form.elements.lname
console.log(inputFirstName)
console.log(inputLastName);

function fForm(event){
    event.preventDefault();
    console.log(event)
    console.log(event.target.fname.value)
    // let firstName = event.target.fname.value;
    // let lastName = event.target.lname.value;
    let listUser = document.getElementsByClassName("usersAnswer")
    // console.log(list)
    // let liElement = document.createElement("li");
    // const text = document.createTextNode(`${firstName}`)
    // const text2 = document.createTextNode(`${lastName}`)
    // liElement.appendChild(text,text2)
    // listUser[0].appendChild(liElement)
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    for(let userInput in formProps){
        let liElement = document.createElement("li");
        const text = document.createTextNode(`${formProps[userInput]}`)
        liElement.appendChild(text)
        listUser[0].appendChild(liElement)
    }
    // console.log(formProps)
}
form.addEventListener("submit", fForm)