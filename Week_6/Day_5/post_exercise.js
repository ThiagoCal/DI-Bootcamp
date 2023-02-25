
const divForm = document.querySelector("#div-form")
const form = document.forms.formPost

form.addEventListener("submit", getForm)

async function getForm(event){
  event.preventDefault();
  try{
    let data = new FormData(event.target)
    let value1 = Object.fromEntries(data.entries()); //transform into an object
    let messageData = {
      title,
      message
    } = value1
    let posting = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: messageData.title,
        body: messageData.message
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    let response = await posting.json()
    console.log(response)
    let postMessage = await(displayMessage(response))
    return postMessage
  }
  catch(err){
    console.log("Error - message wasn't posted")
  }
}

async function displayMessage(response){
    let newDiv = document.createElement("div")
    newDiv.setAttribute("id", response.id)
    divForm.appendChild(newDiv)
    let title = document.createElement("p")
    let titleContent = document.createTextNode(response.title)
    title.appendChild(titleContent)
    let message = document.createElement("p")
    let messageContent = document.createTextNode(response.body)
    message.appendChild(messageContent)
    newDiv.append(title, message)
}