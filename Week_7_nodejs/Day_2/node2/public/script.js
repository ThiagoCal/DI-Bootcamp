async function getData(){
  try{
    let res = await fetch("http://localhost:4000/api/user")
    let data = await res.json()
    showData(data)
  }
  catch(err){
    console.log(err)
  }
}

getData()

const showData = (data) =>{
  console.log("data", data)
  const content = JSON.stringify(data)
  document.getElementById("container").innerHTML = content
}

function showAlert(){
  try{
    alert('Hello From Javascript')
  }
  catch(err){
    console.log(err)
  }
}