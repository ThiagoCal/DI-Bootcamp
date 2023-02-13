const xhr = new XMLHttpRequest();

const form = document.forms.formGiphy

const division = document.querySelector("#container")

form.addEventListener("submit", searchGif)

function searchGif(e){
  let divGif = document.querySelectorAll(".gif")
  if(divGif){
    divGif.forEach(e => e.remove())
  }
  e.preventDefault()
  const query = form.elements[0].value
  const rating = form.elements[1]
  const ratingquery = rating.options[rating.selectedIndex].value
  // console.log(ratingquery)
  xhr.open("GET", `https://api.giphy.com/v1/gifs/search?q=${query}&offset=0&limit=25&rating=${ratingquery}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
  xhr.send()
}

xhr.onload = function(){
  if(xhr.status !== 200){
    console.log("error")
  } else{
    const data = JSON.parse(xhr.response)
    console.log(data.data);
    displayGif(data.data)
  }
}

function displayGif(gif){
  gif.forEach(elem => {
    // console.log(elem)
      const {
          title,
          id, 
          images: {original : {url}},
      } = elem;

      const card = document.createElement("div");
      card.classList.add("gif");
      card.setAttribute("id", id)
      const titleP = document.createElement("p");
      const gifContainer = document.createElement("div");
      const webImg = document.createElement("img")
      const textName = document.createTextNode(title);
      webImg.src = url
      webImg.setAttribute("class", "gif-img")
      const deleteBtn = document.createElement("button")
      deleteBtn.setAttribute("value", "delete")
      deleteBtn.innerText = "Delete"
      deleteBtn.addEventListener("click", deleteGif)
      titleP.appendChild(textName);
      gifContainer.appendChild(webImg)
      gifContainer.appendChild(deleteBtn)
      card.appendChild(titleP);
      card.appendChild(gifContainer);
      division.appendChild(card);
  })
}


function deleteGif(e){
  e.preventDefault()
  console.log(e.target)
  currentGifId = e.target.parentElement.parentElement.id
  currentGif = document.getElementById(currentGifId)
  currentGif.remove()
}

const deleteSearch = document.querySelector("#deleteSearch")
deleteSearch.addEventListener("click", deleteGifs)

function deleteGifs(){
  let divGif = document.querySelectorAll(".gif")
  if(divGif){
    divGif.forEach(e => e.remove())
  }
}