// const grade = 90;

// async function checkGrade () {
//     if(grade>70){
//         return "Great";
//     } else {
//         throw new Error("NO");
//     }
// }

// async function waitCheckGrade () {
//     try {
//         const res = await checkGrade();
//         displayResult(res);
//     } catch (err) {
//         console.log("AN ERROR HAPPENED");
//     }
// }

// function displayResult(res){
//     alert(res)
// }


// waitCheckGrade()


// Exercise Game - The word game You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - if the names are not a string ->
//  reject else - resolve with the name of the 2 ppl in an array
let arrayNames = []
async function checkNames(x, y){
  if (typeof x !== "string" || typeof y !== "string"){
    throw new Error("not a string");
  } else{
    arrayNames.push(x);
    arrayNames.push(y);
    return arrayNames;
  }
}

// // The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
async function checkNoun(noun){
  if(noun.length < 3 ){
    throw new Error("is not a noun");
  }else{
    return noun;
  }
}
// // The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
async function checkCity(city){
  if(city[0] !== city[0].toUpperCase()){
    throw new Error("is not a city");
  }else{
    return city;
  }
}
// // The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" ->
//  reject (use the endWith string method) else resolve with the verb
async function checkVerb(verb){
  if(!verb.endsWith('ing')){
    throw new Error("is not a verb");
  }else{
    return verb
  }
}
// // The last function, is an async function - it receives all the above promises,
//  and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"
async function checkSentence(){
  try{
    const names = await checkNames("Beyonce", "Barack Obama")
    const noun = await checkNoun("football")
    const city = await checkCity("Paris")
    const verb = await checkVerb("playing")
    console.log(`${names[0]} and ${names[1]} are ${verb} ${noun} in ${city}`)
  } catch(err){
    console.log("An error occurred in the promises")
  }
}

checkSentence()


// function getWord () {
//   fetch("http://random-word-api.herokuapp.com/word?number=1")
//   .then((resOne) => {
//       if(resOne.status !== 200){
//           throw new Error ("Couldnt find a word")
//       }
//       return resOne.json();
//   })
//   .then((resTwo) => {
//       console.log(resTwo[0]);
//       getGif(resTwo[0]);
//   })
//   .catch((err) => {
//       const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
//       displayInfo(`ERROR WORD NOT FOUND ${err}`, errorGif)
//   })
// }

// function getGif (word) {
//   fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
//   .then((resOne) => {
//       if(resOne.status !== 200){
//           throw new Error ("Couldnt find a word");
//       }
//       return resOne.json();
//   })
//   .then((resTwo) => {
//       if(resTwo.data.length === 0) {
//           throw new Error("Couldnt find a gif");
//       } else {
//           const gif = resTwo.data.images.original.url;
//           displayInfo(word, gif);
//           console.log(gif);
//       }
     
//   })
//   .catch((err) => {
//       const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
//       displayInfo("ERROR", errorGif)
//   })
// }

async function getWord1(){
    const response = await fetch("http://random-word-api.herokuapp.com/word?number=1")
    if(response.status !== 200){
      throw new Error("Couldn't find word")
    } 
    const word = await response.json()
    return word[0]
}

async function getGif1(word){
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    const gif = await response.json()
    if(gif.data.length === 0){
      throw new Error("Couldn't find gif")
    }
    const gifImage = gif.data.images.original.url;
    return gifImage
}

function displayInfo(wordUser, gifUser) {
  const container = document.getElementById("container");
  const div = document.createElement("div");
  const para = document.createElement("p");
  const image = document.createElement("img");

  const text = document.createTextNode(wordUser);
  para.appendChild(text);
  image.src = gifUser;

  div.append(para, image);
  container.appendChild(div);
}

async function getAll(){
  try{
    const word1 = await getWord1();
    const gif = await getGif1(word1);
    displayInfo(word1,gif)
  }catch(err){
    const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
    displayInfo("ERROR", errorGif)
  }
}


getAll()