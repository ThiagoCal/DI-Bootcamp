async function getData(){
  try{
    let response = await fetch("http://localhost:5001/api/products")
    let data = await response.json()
    showProducts(data)
  }
  catch(err){
    console.log(err)
  }
}

getData();

const showProducts = (arr) => {
  const html = arr.map(item => {
    return `<div>${item.name} ${item.price}</div>`
  })
  document.getElementById("container").innerHTML = html.join('')
}

async function showData(){
  try{
    const prod_id = document.getElementById("show").value
    console.log(prod_id)
    let response = await fetch(`http://localhost:5001/api/products/${prod_id}`)
    let data = await response.json()
    // const arr = []
    // arr.push(data)
    // showProducts(arr)
    displayProducts(data)
  }
  catch(err){
    console.log(err)
  }
}

const displayProducts = (item) => {
  let html = `<div>${item.name} ${item.price}</div>`
  document.getElementById("container").innerHTML = html
}

async function filterData(){
  try{
    const prod_name = document.getElementById("filter").value
    let response = await fetch(`http://localhost:5001/api/search?q=${prod_name}`)
    let data = await response.json()
    showProducts(data)
  }
  catch(err){
    console.log(err)
  }
}
