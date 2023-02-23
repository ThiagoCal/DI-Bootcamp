const  products = [
  {
      id: 0,
      name: "Deluxe Bicycle",
      url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
      price: 499.98
  },
  {
      id: 1,
      name: "Super Deluxe bagpack",
      url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
      price: 134.99
  },
  {
      id: 2,
      name: "Super Duper Scooter",
      url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
      price: 1090.95
  },
  {
      id: 3,
      name: "Smartphone",
      url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
      price: 399.99
  }
];

let container = document.querySelector("#container");

(function(){
  products.forEach((elem) => {
    const {
      id,
      name,
      url,
      price,
    } = elem;
    const divProduct = document.createElement("div")
    divProduct.setAttribute("id", id)
    divProduct.setAttribute("class","product");
    container.appendChild(divProduct);

    const title = document.createElement("p");
    title.setAttribute("id", "productTitle")
    const titleText = document.createTextNode(name);
    title.appendChild(titleText)
  

    const imageProductDiv = document.createElement("div")
    const imageProduct = document.createElement("img")
    imageProduct.setAttribute("class", "product-img")
    imageProduct.src = url;
    imageProductDiv.appendChild(imageProduct)
 

    const priceP = document.createElement("p")
    priceP.setAttribute("id", "productPrice")
    const priceText = document.createTextNode(price)
    priceP.appendChild(priceText)
   
    divProduct.append(title, imageProductDiv, priceP)

    divProduct.addEventListener("click", addToCart)
  })
})()


let cart =  JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(e){
  e.preventDefault();
  let idProduct = e.currentTarget.id;
  const correctProduct = products.find(elem => elem["id"] === Number(idProduct))
  const newObj = {
    idProduct : correctProduct["id"],
    nameProduct : correctProduct["name"],
    priceProduct : correctProduct["price"],
  }
  cart.push(newObj);
  console.log(cart)
  localStorage.setItem('cart', JSON.stringify(cart))
}

let payButton = document.createElement("button")
payButton.setAttribute("type", "button")
payButton.innerText = "Checkout";
container.appendChild(payButton)
payButton.addEventListener("click", checkout)

function checkout(e){
  e.preventDefault();
  window.open('checkout.html')
}
// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// MANDATORY --> add to each item an id and a class attribute.
// The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage.
// Each item is an object containing the name of the product and the price.
// For now, the user can add only 1 product per category (meaning 1 scooter, 1 bicycle ect...)
// Bonus: use a Class to create each item
// When the user is done with his shopping, he will click on the "Pay button" (which is actually an tag) and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. Using the DOM display :
// all the items that the user bought : MANDATORY --> use object destructuring
// the total price he needs to pay
// a "Submit payment" Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.
// Bonus: the user can add multiple times, the same product. --> Each product item will be an object containing the name of the product, the price and the quantity.