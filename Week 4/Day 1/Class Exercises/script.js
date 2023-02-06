let text = "Hello";

function checkText (){
	console.log("In the function",text); //"in the function", "Hello"
	text += " World";
	console.log("Still in the function",text); //"still in the function","Hello World"
}

console.log("before the function", text);//"before the function", "Hello"

checkText()

console.log("after the function", text);//"after the function", "Hello World"

let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend); //"In the function","Alice"
	friend += " Smith";
	console.log("Still in the function",friend);//"Still in the function","Alice Smith"
}

console.log("before the function", friend);//"before the function", "Harry"

checkfriend()

console.log("after the function", friend);//"after the function", "Harry"


//function declaration
// function greet(username){
//     alert(`Hello ${username}`)
// }

// greet()

// //function expression
// const greeting = function (username){
//     alert(`Hello ${username}`)
// }

// greeting();

// //arrow function
// const greetings = () => {
//     alert(`Hello ${username}`)
// }

// greetings()

// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function


const classmates = ["Josh", "Sophie", "Lily", "Mark"]


classmates.forEach((elem, i)=>{
    if(elem === "Sophie"){
        classmates[i] += "&";
    } else {
        classmates[i] += "!";
    }
})

console.log(classmates)


const prices = [10, 23, 5];

let sum = 0;
prices.forEach((elem, index)=>{
    sum = elem += sum
    return sum
})

console.log(sum)


const ageClient = [5, 8, 40, 18]

const value = ageClient.some((age) => age>= 18)

function isBiggerThan18(element) {
    if(element >= 18){
       alert("you are in charge")
    } else{
        alert("no adult in the group")
    }
}
  
console.log(ageClient.some(isBiggerThan18)) 

// Exercise 1
// const prices = [10, 23, 5];
// 1. Using a normal for loop, find the sum of the array
// 2. Using the for each method, find the sum of the array
// Exercise 2
// const ageClient = [5, 8, 40, 18];
// Use the some method to check if there is at least one adult in the array (ie. age bigger or equal to 18)
// If there is, alert him that he is in charge of the others
// Use the every method to check if all the users are adults (ie. age bigger or equal to 18)
// If there not, alert them that they have a price reduction