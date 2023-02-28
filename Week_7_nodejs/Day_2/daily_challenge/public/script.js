async function showHobby(){
  try{
    let response = await fetch("http://localhost:5000/aboutMe/:hobby")
    let data = await response.json()
    showProducts(data)
  }
  catch(err){
    console.log(err)
  }
}
const displayProducts = (item) => {
  let html = `<div>${item}</div>`
  document.getElementById("container").innerHTML = html
}




const sendData = (e) =>{
  e.preventDefault();
  console.log(e)
  const email = e.target.email.value;
  const message = e.target.message.value;

  fetch('/formData',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({email, message})
    }
  ).then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err =>
    console.log(err)
  )
}

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function validateMessage(message) 
{
 if (typeof message === 'string')
  {
    return (true)
  }
    alert("You have entered an invalid message!")
    return (false)
}