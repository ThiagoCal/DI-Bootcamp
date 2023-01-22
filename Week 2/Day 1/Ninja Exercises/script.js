// Exercise 1

// 5 >= 1 output: true
// 0 === 1  output: false
// 4 <= 1  output: falsee
// 1 != 1  output: false
// "A" > "B" output: false
// "B" < "C" output: true
// "a" > "A" output: true
// "b" < "A" output: false
// true === false output: false
// true != true output: false

// Exercise 2
// let promptMessage = prompt('Write two numbers separated with a "," comma', "2,3")
// let newStr = promptMessage.split(',')
// let sum = parseInt(newStr[0]) + parseInt(newStr[1])
// console.log(newStr[0])
// console.log(newStr[1])
// console.log(sum)
// alert(`The sum of this number is: ${sum}`)

//Exercise 3
// let promptNemo = prompt('Write a sentence containing "Nemo"', "I love the movie named Nemo")
// const nemo = "Nemo";
// const nemoLowerCase = "nemo";
// const searchNemo = promptNemo.search(nemo);
// const searchNemoLower= promptNemo.search(nemoLowerCase);

// console.log(searchNemo, searchNemoLower)

// if(searchNemo > -1){
//      alert(`I found Nemo at ${searchNemo}`);
// }
// else if (searchNemoLower !== -1){
//      alert(`I found Nemo at ${searchNemoLower}`);
// }
// else{
//      alert("I can't find Nemo");
// }

//Exercise 4
// let promptBoom = prompt("Return a number", "1");

// if(promptBoom < 2){
//     alert("boom")
// }
// else if(promptBoom > 2 && promptBoom % 5 === 0 && promptBoom % 2 === 0){
//     let result = `B${"o".repeat(promptBoom)}m!`
//     alert(result.toUpperCase())
// }
// else if(promptBoom > 2 && promptBoom % 2 === 0){
//     alert(`B${"o".repeat(promptBoom)}m!`)
// }
// else if(promptBoom > 2 && promptBoom % 5 === 0){
//     let result = `B${"o".repeat(promptBoom)}m`
//     alert(result.toUpperCase())
// }
// else if(promptBoom > 2){
//      alert(`B${"o".repeat(promptBoom)}m`)
// }
// else{
//     alert("-")
// }
