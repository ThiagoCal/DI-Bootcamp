// setTimeout(showAlert, 2000)

// setTimeout(showDiv, 5000)

function showAlert(){
    alert("Hello World")
}


function showDiv(){
    let division = document.getElementById("container")
    let paragraph = document.createElement("p")
    let text = document.createTextNode("Hello World")
    paragraph.appendChild(text)
    division.appendChild(paragraph)
}


function startInterval(){
    let interval = setInterval(showDiv2, 2000)
    let clearBtn = document.getElementById("clear")
    clearBtn.addEventListener("click", stopInterval)
    
    function stopInterval(){
        clearInterval(interval)
    }
}

let counter = 6
let interval = setInterval(showDiv2, 2000)

function showDiv2(){
    counter--;
    console.log(counter)
    if(counter === 0){
        clearInterval(interval)
    } else{
        let division = document.getElementById("container")
        let paragraph = document.createElement("p")
        let text = document.createTextNode("Hello World")
        paragraph.appendChild(text)
        division.appendChild(paragraph)
    }
}
