let inputField = document.querySelector('#inputText')
let error = document.querySelector("#errorMessage")

function validateEntry(e){
    let regex = /^[a-zA-Z]*$/i
    if(e.target.value.match(regex)){
        error.style.display = 'none'
    } else {
        e.preventDefault();
        e.target.value = e.target.value.slice(0, -1)
        error.getElementsByClassName.display = 'block'
        error.textContent = "You typed not a letter"
    }
}

inputField.addEventListener("keyup", validateEntry)