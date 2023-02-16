

// function trainingPromises(data){
//   const mypromise = new Promise((resolve, reject) =>{
//     setTimeout (function () {
//       if(typeof data === "string") {
//           resolve(data.toUpperCase())
//       } else {
//           reject(data)
//       }
//   }, 5000)
//   })
//   return mypromise;
// }

// trainingPromises("hello")
// .then((res1)=>{
//   console.log(res1.repeat(2))
// })
// .catch((err) => {
//   console.log("Error: invalid parameter")
//   console.log(err);
// })
// .finally(() => {
//   console.log("congratulations");
// })
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")
// 5:38
// Zip
 
let division = document.querySelector("#container")
function getGif(word){
  console.log(word)
  fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
  .then((resOne)=>{
    const data = resOne.json()
    console.log(data)
    return data
  })
  .then((resTwo)=>{
    if(resTwo.data.length === 0){
      throw new Error("Couldn't find GIF 404 ERROR")
    }
    console.log(resTwo)
    const {
      title,
      id, 
      images: {original : {url}},
    } = resTwo.data;
    const card = document.createElement("div");
    card.classList.add("gif");
    card.setAttribute("id", id)
    const titleP = document.createElement("p");
    const gifContainer = document.createElement("div");
    const webImg = document.createElement("img")
    const textName = document.createTextNode(title);
    webImg.src = url
    webImg.setAttribute("class", "gif-img")
    titleP.appendChild(textName);
    gifContainer.appendChild(webImg)
    card.appendChild(titleP);
    card.appendChild(gifContainer);
    division.appendChild(card);
  })
  .catch((err)=>{
    console.log(err)
    getGif("404 ERROR")
  })
}




function getName(){
  fetch("http://random-word-api.herokuapp.com/word?number=1")
  .then((res)=>{
    if(res.status !== 200){
      throw new Error("Couldn't find a word")
    }
    const data = res.json()
    return data
  })
  .then((word)=>{
    console.log(word[0]);
    let wordRandom = word[0]
    getGif(wordRandom)
  })
  .catch((err)=>{
    return err
  })
}

getName()
// function displayGif(){
 
//   // let imgGif = document.createElement("img")
//   // imgGif.src = gif.
// }


// displayGif()