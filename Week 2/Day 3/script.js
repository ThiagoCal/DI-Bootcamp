//Exercise 1

// let number= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// for(let i = 0; i < number.length; i++){
//     if(number[i] % 2 === 0){
//         console.log(`${number[i]} is even`)
//     }
//     else{
//         console.log(`${number[i]} is odd`)
//     }
// }

for(let i = 0; i <= 15; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`)
    }
    else{
        console.log(`${i} is odd`)
    }
}

//Exercise 2 

const prices = [23, 15, 34, 10];

// Create a variable sum equals to 0
// Loop over this array, to get the sum of all the numbers
// Where should you console log the sum ?

let sum = 0;

for(let i = 0; i < prices.length; i++){
    sum = prices[i] + sum;
    console.log(sum);
}

console.log(sum)


colors = ["blue", "red", "green"]

for(color of colors){
    console.log(`Color is ${color}`)
}

const user = {
    username: "John",
    lastname: "Smith",
}

for(let key in user){
    console.log(key);
    console.log(user[key])
}


let userAnswer = prompt("What is the city I am thinking?", " ").toLowerCase()

while(userAnswer !== "paris"){
    console.log(userAnswer);
    userAnswer = prompt("What is the city I am thinking?", " ").toLowerCase();
}
