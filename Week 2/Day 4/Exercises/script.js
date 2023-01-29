function infoAboutMe(){
    console.log("Hi my name is Thiago and I'm 35 years old. I like to programming, play video games and surf.");
}

infoAboutMe();


function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`My name is ${personName}. I'm ${personAge} years old. My favorite color is ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


//Exercise 2


function calculateTip(){
    let userAnswer = prompt("John, what is the amount of the bill?")
    if(userAnswer <= 50){
        let result = userAnswer * 1.2
        return console.log(Math.ceil(result))
    }
    else if(userAnswer > 50 && userAnswer <= 200){
        let result = userAnswer * 1.15
        return console.log(Math.ceil(result))
    }
    else if(userAnswer > 200){
        let result = userAnswer * 1.10
        return console.log(Math.ceil(result))
    }
}

// calculateTip();


//Exercise 3 
// let sum = 0;
// function isDivisible(){
//     for(let i = 0; i <= 500; i++){
//         if(i % 23 === 0){
//             console.log(i)
//             sum += i;
//         }
//     }
//     console.log(sum)
// }

// isDivisible();

//part 2

let sum = 0;
function isDivisible(divisor){
    for(let i = 0; i <= 500; i++){
        if(i % divisor === 0){
            console.log(i)
            sum += i;
        }
    }
    console.log(sum)
}

isDivisible(5);


// Exercise 4

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

let bill = 0
let list = ""
function myBill(){
    for(let i = 0; i < shoppingList.length; i++){
        let fruit = shoppingList[i]
        if(fruit in stock === true){
           if(stock[fruit] !== 0){
                console.log(fruit)
                let price = fruit in prices
                console.log(prices[fruit])
                bill += prices[fruit]
                list += `${fruit}: $${prices[fruit]} `
                stock[fruit] -= 1
           }
        }
    }
    console.log(`Total price: ${bill}. You bought: ${list}`)
    console.log(stock)
}

myBill();

//Exercise 5

let amount = 0
function changeEnough(itemPrice, amountOfChange){
    for(let i = 0; i < amountOfChange.length; i++){
        if(i === 0){
            let quarter = amountOfChange[i] * 0.25;
            amount += quarter;
        }
        else if( i === 1){
            let dimes = amountOfChange[i] * 0.10;
            amount += dimes;
        }
        else if( i === 2){
            let nickel = amountOfChange[i] * 0.05;
            amount += nickel;
        }
        else if( i === 3){
            let penny = amountOfChange[i] * 0.01;
            amount += penny;
        } 
    }
    console.log(amount)
    if(amount >= itemPrice){
        return console.log(true);
    } else{
        return console.log(false);
    }
}


// changeEnough(4.25, [25, 20, 5, 0])
changeEnough(14.11, [2,100,0,0])
changeEnough(0.75, [0,0,20,5]) 


//Exercise 6

function hotelCost(){
    let numberOfNights = prompt("How many nights do you wish to stay");
    numberOfNights = parseInt(numberOfNights)
    if(numberOfNights === "" || isNaN(numberOfNights)){
        return hotelCost();
    } else{
        let price = 140
        let total = price * numberOfNights
        return alert(`Your stay will cost: ${total}`)
    }
}

hotelCost();



function planeRideCost(){
    let userDestination = prompt("Where do you want to go?");
    if(typeof userDestination !== 'string' || userDestination instanceof number){
        planeRideCost();
    }
    else if(userDestination === "London"){
        return console.log(183)
    }
    else if(userDestination === "Paris"){
        return console.log(220)
    }
}