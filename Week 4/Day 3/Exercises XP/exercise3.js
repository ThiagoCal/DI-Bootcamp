const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log(epic)

let sentence = epic.reduce((acc, word)=>{
  return `${acc} ` + word
}, "")

console.log(sentence)