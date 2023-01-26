
let phrase = 'Alphabet, World, in, a, frame'

let array = phrase.split(", ")

let length = 0;
let longest
function getLongestWord(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].length > length){
            length = array[i].length;
            longest = array[i]
        }
    }
    return longest.length
}

function frame(array){
    let longestWordSize = getLongestWord(array);
    let stars = "*"
    let numberOfStars = longestWordSize + 4
    let firstLine = stars.repeat(numberOfStars)
    for(let i = 0; i < array.length; i++){
        let diff = (longestWordSize - array[i].length);
        let space = ''.padEnd(diff,' ');
        array[i] = `* ${array[i]}${space} *`
        console.log(array[i])
    }
    array.push(firstLine)
    array.unshift(firstLine)
    return array
}

let newArray = frame(array)

for(word of newArray){
    console.log(word)
}

