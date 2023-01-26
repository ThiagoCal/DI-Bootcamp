//Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people.splice(people.length-1,1,"Jason")
console.log(people)
people.indexOf("Mary");
let slicedArray = people.slice();

slicedArray.indexOf("Foo");

let last = slicedArray[slicedArray.length-1]
console.log(last)

//Part 2

for(person of people){
    console.log(person)
}

for(person of people){
    if(person !== "Jason"){
        console.log(person)
    }else{
        break;
    }
}

//Exercise 2

let colors = ["dark blue", "cyane", "grey", "white", "green"];

let suffixes = ["st", "nd", "rd", "th", "th"]

for(let i = 0; i < colors.length; i++){
    // console.log(`My ${[i+1]} choice: ${colors[i]}`)
    for(let x = 0; x < suffixes.length; x++){
        if(i === x){
            console.log(`My ${[i+1]}${suffixes[x]} choice: ${colors[i]}`)
        }
    }
}

//Exercise 3


// let userResponse = prompt("Give me a number", " ")
// userResponse = parseInt(userResponse)
// console.log(userResponse)
// console.log(typeof userResponse)

// while(typeof userResponse === 'number' && userResponse < 10){
//     userResponse = prompt("Give me a number", " ");
// }

//Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building['numberOfFloors'])

console.log(building['numberOfAptByFloor']['firstFloor'], building['numberOfAptByFloor']['thirdFloor'])

console.log(building['numberOfRoomsAndRent']['dan'][0])

let sum = 0;

if(building['numberOfRoomsAndRent']['sarah'][1] + building['numberOfRoomsAndRent']['david'][1] > building['numberOfRoomsAndRent']['dan'][1]){
    building['numberOfRoomsAndRent']['dan'][1] = 1200;
}

console.log(building['numberOfRoomsAndRent']['dan'][1])

//Exercise 5

let object = {
    father: {
        name: 'breno',
        age: 65,
    },
    mother: {
        name: 'bladine',
        age: 56,
    }
}

for(let position in object){
    console.log(position)
    console.log(object[position])
}

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}


let sentenceDetails = Object.entries(details).join(' ')
sentenceDetails = sentenceDetails.replace(/,/g, " ")
console.log(sentenceDetails);

for(let obj in details){
    console.log(`${obj} ${details[obj]}`)
}


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

for(let i = 0; i < names.length; i++){
    console.log(names[i][0])
}

console.log()