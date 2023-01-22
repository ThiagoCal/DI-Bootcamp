//Exercise 1

let sentence = ["my","favorite","color","is","blue"];

let result = sentence.join(" ")

console.log(result)

//Exercise 2

let str1 = "mix";
let str2 = "pod";

let str1LastLetter = str1.substring(str1.length - 1)
let str2LastLetter = str2.substring(str2.length - 1)
str1 = str1.slice(0, -1) + str2LastLetter
str2 = str2.slice(0, -1) + str1LastLetter
console.log(str1, str2)

let concatenated = `${str1} ${str2}`
console.log(concatenated)

//Exercise 3