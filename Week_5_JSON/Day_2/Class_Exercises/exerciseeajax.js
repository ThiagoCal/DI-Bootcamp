let xhr = new XMLHttpRequest(); //create an object

const button = document.querySelector("button");
button.addEventListener("click", makeRequest);

function makeRequest () {
    xhr.open("GET", "http://universities.hipolabs.com/search?country=Israel") 
    xhr.send() 
}

xhr.onload = function () {
  // console.log(xhr);
  if (xhr.status !== 200) {
      console.log("error");
  } else {
      const data = JSON.parse(xhr.response);
      console.log(data)
      displayUni(data);
  }
}

xhr.onprogress = function (event) {
  let percentComplete = parseInt((event.loaded / event.total) * 100);
  console.log("Upload: " + percentComplete + "% complete")
}

//if the request couldnt be made (no internet) or problem in the server side
xhr.onerror = function (){
  console.log("error on error");
}


const section = document.getElementById("container");

function displayUni(uni){
    uni.forEach(elem => {
      console.log(elem)
        const {
            name, 
            web_pages: [position_one]
        } = elem;

        const card = document.createElement("div");
        card.classList.add("uni");
        const nameR = document.createElement("p");
        const webAddress = document.createElement("p");
        const webLink = document.createElement("a")
        const textName = document.createTextNode(name);
       
        webLink.href = position_one
        webLink.innerHTML = position_one
        nameR.appendChild(textName);
        webAddress.appendChild(webLink)
        card.appendChild(nameR);
        card.appendChild(webAddress);
        section.appendChild(card);
    })
}