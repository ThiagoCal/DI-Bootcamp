let header = document.getElementsByTagName("h1")[0]

console.log(header.innerHTML)

let lastParagraph = document.getElementsByTagName("article")[0].lastElementChild.innerHTML

console.log(lastParagraph)

let header3 = document.getElementsByTagName("h3")[0]
console.log(header3)


function hideText(){
    header3.style["display"] = "none";
}

header3.addEventListener("click", hideText)

let buttonBold = document.getElementById("bold")

function makeBolder(){
    let allParagraphs = document.querySelectorAll("p")

    for(let i of allParagraphs){
        i.style.fontWeight = "bold"
    }
}

buttonBold.addEventListener("click", makeBolder)

function zoomText(){
    console.log("hello")
    header.style.fontSize = `${Math.floor(Math.random() * 101)}px`
}


header.addEventListener("mouseover", zoomText)

// .hidden {
//     visibility: hidden;
//     opacity: 0;
//     transition: visibility 0s 2s, opacity 2s linear;
//   }