const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(){
  return new Promise(function (resolve, reject) {
    let jsObj = JSON.parse(morse)
    if (Object.keys(jsObj).length === 0) {
        reject('ERROR, javaScript object is empty')
    } else {
        resolve(jsObj)
    }
  })
}

toJs()

function toMorse(morseJS) {
  return new Promise(function (resolve, reject) {
      let userAnswer = prompt('Please enter a word or sentence').toLowerCase()
      userAnswer = userAnswer.replace(/\s/g, '');   // to remove spaces in case string is a sentence and not just a word
      let stringToArray = userAnswer.split('')
      let availableChars = Object.keys(morseJS)
      if (stringToArray.every(char => availableChars.includes(char))) {
          let morseTranslatedArr = stringToArray.map(char => morseJS[char])
          resolve(morseTranslatedArr)
      } else {
          reject('ERROR, the promise rejects because the character doesn\'t exist in the morse javascript object')
      }
  })
}

function joinWords(morseTranslation) {
  const container = document.getElementById('container')
  const div = document.createElement('div')
  const p = document.createElement('p')
  const text = document.createTextNode(morseTranslation.join(' '))
  p.appendChild(text)
  div.appendChild(p)
  container.appendChild(div)
}
toJs()
  .then((jsObj) => toMorse(jsObj))
  .then((resOne) => joinWords(resOne))
  .catch((err) => console.log(err))