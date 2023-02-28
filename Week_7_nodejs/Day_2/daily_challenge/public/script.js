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

getData();

const displayProducts = (item) => {
  let html = `<div>${item}</div>`
  document.getElementById("container").innerHTML = html
}

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function validateMessage(mesage) 
{
 if (typeof form.message.value === 'string')
  {
    return (true)
  }
    alert("You have entered an invalid message!")
    return (false)
}