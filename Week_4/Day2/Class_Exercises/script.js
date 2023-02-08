function setObj(person) {
    person.age = 25; 
    return person;
}

let personObj1 = {
    name: 'Alex',
    age: 30
};

let personObj2 = setObj(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?



// (function (username) {
//     let div = document.querySelector("#container")
//     div.innerHTML = `<p>${username}</p>`
// })("John")


// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div





(function startWars(){
    let characters = [];
    function createCharacter(firstName, lastName = "Smith"){
        characters.push(`${firstName} ${lastName}`)
    }
    function displayCharacter(){
        const container = document.querySelector("#container")
        characters.forEach((elem)=>{
            const para = document.createElement("p")
            const text = document.createTextNode(elem);
            para.appendChild(text)
            container.appendChild(para)
        })
    }
    createCharacter("Luke","Skywalker")
    createCharacter("Chewbacca")
    createCharacter("Yoda")
    createCharacter("Han", "Solo")
    createCharacter("Boba", "Fett")
    displayCharacter()
})()

// startWars()

// Create a function named starWars that takes no parameter.
// The function should declare a variable characters equal to an empty array
// In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. 
// If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once