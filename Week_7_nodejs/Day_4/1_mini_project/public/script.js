

const getData = async (e) =>{
  e.preventDefault();
  let product = e.target.product.value;
  let quantity = e.target.quantity.value;
  console.log(product, quantity)
  let config = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({product, quantity})
  }
  let response = await fetch('/formData', config) 
  let data = await response.json()
  console.log(data)
  // showList(data)
}

// const showList = (data) =>{
  
// }

// const getData = (e) =>{
//   e.preventDefault();
//   console.log(e)
//   let product = e.target.product.value;
//   let quantity = e.target.quantity.value;
//   console.log(product)
//   fetch('/formData',
//     {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify({product, quantity})
//     }
//   ).then(res => res.json())
//   .then(output => {
//     console.log(output)
//   })
//   .catch(err =>
//     console.log(err)
//   )
// }