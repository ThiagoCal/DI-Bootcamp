const restaurant = [20,15.2,10]

const TAXES = 1.17


let withTaxes = restaurant.map(elements => 
  elements*TAXES
)

console.log(withTaxes)


const famousPeople = [
  {
      name: "Angelina Jolie",
      job: "actor",
      age: 80
  },
  {
      name: "Georges Clooney",
      job: "actor",
      age: 2
  },
  {
      name: "Paris Hilton",
      job: "actor",
      age: 5
  },
  {
      name: "Kayne West",
      job: "singer",
      age: 16
  },
  {
      name: "Britney Spears",
      job: "singer",
      age: 100
  }
]

let names = []
console.log(names)

famousPeople.map(elem => names.push(`${elem.name}`))
let namesPlusJob = famousPeople.map(elem => (`${elem.name}: ${elem.job}`))

namesPlusJob.forEach(elem =>{
  let div = document.querySelector("#container")
  let text = document.createTextNode(elem)
  let paragraph = document.createElement("p")
  paragraph.appendChild(text)
  div.appendChild(paragraph)
})

console.log(famousPeople)
// /Using the array above, use the map method, to create a new array that contains 
// only the name of the people
// // Use the map method, to create a new array, that contains objects, each object contains
//  the name of the actor, and it's job
// // BONUS: Using the array you get from question2, use the for each method, to add 
// the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")
const numbers = [2,5,6,8,15,12]
const evenNumbers = numbers.filter((elem) => elem % 2 === 0)

const studentsFootball = [
  {name: 'Rich', score: 33}, 
  {name: 'Peter', score: 55}
 ];

const biggerOrEqual = studentsFootball.filter(elem => (elem.score > 50))
                                     .map(elem => elem.name)


 let aboveAverage = studentsFootball.map(elem =>{ 
    elem.score > 50 ? elem.aboveAverage = true :  elem.aboveAverage = false 
    return elem
  }
 )

 console.log(aboveAverage)

// const test1 = studentsFootball.map(elem =>{ 
//   let obj = new Object()
//   obj = elem
//   obj.score > 50 ? obj.aboveAverage = true : obj.aboveAverage = false
// }
// )

//  console.log(aboveAverage)
// console.log(test1)
//  Create a new array of objects, containing the name, score and
//   isAboveAverage if the students has a score bigger that 50,
//    the key isAboveAverage will be true, 
//  else the key isAboveAverage will be false. Use ternary operator



//Exercise 1
const numbers1 = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const positive = numbers1.filter(elem => elem > -1)

console.log(positive)


//Exercise 2
const characters = [
   { name: 'James T. Kirk', series: ['Star Trek'] },
   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
];

const nextGeneration = characters.filter( element =>
  element.series.includes('Star Trek: The Next Generation'))
 
console.log(nextGeneration)
// Exercise 1: create a new array that filters only the positive value
// const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
// Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in
//  Star Trek: The Next Generation. Use filter() to filter the array 
// of characters below
// const characters = [
//    { name: 'James T. Kirk', series: ['Star Trek'] },
//    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ]; 
// Exercise 3 NOT MANDATORY - send me the result by slack
// Use the filter method to create an array without duplicates.
// const colors = ["blue", "red", "red", "blue", "yellow"]

// The result should be ["blue","red","yellow"]


const students = [
  {name: 'Rich', score: 33}, 
  {name: 'Peter', score: 55},
  {name: 'John', score: 75}
];


// Find the sum of the score of the students using reduce
// Exercise 2
// Turn an array of voter objects into a count of how many people voted
// let voters = [
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Bob' , age: 30, voted: true},
// ];