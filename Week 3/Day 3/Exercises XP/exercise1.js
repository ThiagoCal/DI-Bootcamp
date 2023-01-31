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

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.