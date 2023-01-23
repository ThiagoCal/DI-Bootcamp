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