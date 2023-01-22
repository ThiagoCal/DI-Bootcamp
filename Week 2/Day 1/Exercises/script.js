// Exercise 2

console.log("Exercise 2 - Daily Challenges")

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const x = myWatchedSeries.splice(1, 1);

let length = myWatchedSeries.length

myWatchedSeries[1] = "friends"

myWatchedSeries[2] = "Lost"

myWatchedSeries.unshift("The Office")

let index = myWatchedSeries.indexOf("black mirror")

const y = myWatchedSeries.splice(index, 1)

let theOffice = myWatchedSeries.indexOf("The Office")

myWatchedSeries[theOffice] = "The Office US"

const sentence = `I watched ${myWatchedSeries.length}: ${myWatchedSeries.join(', ')}`

console.log(sentence)

// Exercise 3

console.log("Exercise 3 - Daily Challenges")

let celsiusTemperature = 23

function toFarenheit(celsiusTemperature){
    return (celsiusTemperature / 5) * 9 + 32 
}

let result = `${celsiusTemperature}°C is ${toFarenheit(celsiusTemperature)}°F`
console.log(result)


// Exercise 4

console.log("Exercises 4")

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because 34 and 21 are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23, because a is now 2 and b is equal to 21, so the sum will be 23
// Actual:23

//c will be undefined


// Exercise 5
console.log("Exercise 5")
typeof(15)
// Prediction: It will be a number
// Actual: It is a number

typeof(5.5)
// Prediction: It will be a number
// Actual: It is a number

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction: It is a string
// Actual: String

typeof(true)
// Prediction: It is a boolean
// Actual: It is a boolean

typeof(1 != 2)
// Prediction: It is a boolean
// Actual: It is a boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual:NaN

"1" + "3"
// Prediction: 13
// Actual:13

"1" - "3"
// Prediction:NaN
// Actual:NaN

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "hello"
// Prediction: NaN
// Actual:NaN

1 != 1
// Prediction: false
// Actual:false

1 == "1"
// Prediction: false
// Actual:false

1 === "1"
// Prediction: false
// Actual:false


// Exercise 6
console.log("Exercise 6")
5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction:NaN
// Actual:NaN

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual:"  "

" " + 0
// Prediction:" 0"
// Actual:" 0"

true + true
// Prediction: true
// Actual: 2

true + false
// Prediction: false
// Actual: 1

false + true
// Prediction: false
// Actual: false

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN