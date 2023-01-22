//Exercise 1

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//remove the bananas from the array
fruits.shift()
console.log(fruits)

//sorting an array
fruits.sort()
console.log(fruits)

//adding Kiwi to the end of array
fruits.push("Kiwi")
console.log(fruits)

//removing apples from array
fruits.splice(0,1)
console.log(fruits)

//reverse sorting array
fruits.reverse()
console.log(fruits)

//Exercise 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0])