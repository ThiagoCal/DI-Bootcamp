let sentence = 'The movie is not that bad, I like it.';

let wordNot = sentence.toLowerCase().indexOf("not");
console.log(wordNot)

let wordBad = sentence.toLowerCase().indexOf("bad")+3;
console.log(wordBad)

if(wordBad !== -1 && wordNot !== -1){
    if(wordBad > wordNot){
       let slice = sentence.slice(wordNot, wordBad);
       console.log(slice)
       sentence =sentence.replace(slice, "good")
       console.log(sentence)
    }
}


for(let counter = 1; counter <= 3; counter++){
    console.log('hello')
}

let numberOfPoints = 10;

for(let counter = 1; counter <= 5; counter++){
    numberOfPoints++
    console.log(numberOfPoints)
}

let array = ["oi","comida","animal", "peixe"]

for(let i = 0; i < array.length; i++){
    console.log(array[i]+"s");
}


let array2 = ["apple","banana", "watermelon", "melon", "pear"]

for(let i = 0; i < array2.length; i++){
    if(!array2[i].includes("melon")){
        array2[i]+"s";
    }
}

console.log(array2)