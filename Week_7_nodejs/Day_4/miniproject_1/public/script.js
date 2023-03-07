const sendData = async (e) =>{
  e.preventDefault()
  let product = e.target.product.value;
  let quantity = e.target.quantity.value;
  let config = {
    method:"POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({product, quantity})
  }
  let response = await fetch('/api/shopping_list/formData', config)
  let data = await response.json()
  console.log(data)
  getData()
}

const getData = async () =>{
  let response = await fetch('/api/shopping_list/list')
  let data = await response.json()
  console.log(data)
  displayList(data)
}
getData();

const displayList = (data) =>{
  const html = data.map(item => {
    return `<div>${item.product} ${item.quantity}</div>`
  })
  document.getElementById("list").innerHTML = html.join('')
}