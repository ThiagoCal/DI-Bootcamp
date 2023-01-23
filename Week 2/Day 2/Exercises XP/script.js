// const userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5,
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8646466363,
// 		pear : 0.2
// 	}
// };

// 1. Add the lastname Smith to the object
// 2. Change the username from John to Tom
// 2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants


// userCart.lastname = "Smith"
// userCart.username = "Tom"
// userCart.prices.pear = 0.2 * 1.17

// console.log(userCart)
// let userPrompt = prompt("What fruit do you want?", "Choose one between: banana, apple or pear")

// userPrompt = userPrompt.toLowerCase()

// console.log(userCart.prices[userPrompt])


// const family = {
//     lastName : "Smith",
//     members : 3,
//     names : ["John", "Tom", "Diana"],
//     isInVacation: true,
// }

// Change dynamically the isInVacation key.
// If the key is true, it should become false and vice versa
// Dont use conditionals


//Exercise 1

let x = 10;
let y = 5;

if (x > y){
    console.log("x is the biggest number");
} else{
    console.log("y is the biggest number");
}

//Exercise 2

let newDog = "Chihuahua"
console.log(newDog.length);
console.log(newDog.toUpperCase)
console.log(newDog.toLowerCase)
if(newDog === "Chihuahua"){
    console.log("I love Chihuhuas, it's my favorite dog breed")
} else {
    console.log("I don't care, I prefer cats")
}

//Exercise 3

// let promptNumber = prompt("Write a number and I will check if it is odd or even", "");

// if(promptNumber % 2 === 0){
//     console.log(`${promptNumber} is an even number`);
// } else{
//     console.log(`${promptNumber} is an odd number`)
// }

//Exercise 4
const users = [];


if(users.length === 0){
    console.log("no one is online")
}
else if(users.length === 1){
    console.log(`${users} is online`)
}
else if(users.length === 2){
    console.log(`${users[0]} and ${users[1]} are online`)
}
else if(users.length > 2){
    console.log(`${users[0]}, ${users[1]} and ${users.length - 2} are online`)
}