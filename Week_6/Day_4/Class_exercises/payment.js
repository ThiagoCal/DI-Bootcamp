let division = document.querySelector("#checkoutDiv");
let totalSum = 0;
let spantotal = document.querySelector("#total");
(function(){
  let items = localStorage.getItem("cart")
  let parsedItems = JSON.parse(items)
  parsedItems.forEach(({idProduct, nameProduct, priceProduct}) => {
    totalSum += priceProduct
    const divProduct = document.createElement("div")
    divProduct.setAttribute("id", idProduct)
    divProduct.setAttribute("class","product");
    division.appendChild(divProduct);

    const title = document.createElement("p");
    title.setAttribute("id", "productTitle")
    const titleText = document.createTextNode(nameProduct);
    title.appendChild(titleText)

    const priceP = document.createElement("p")
    priceP.setAttribute("id", "productPrice")
    const priceText = document.createTextNode(priceProduct)
    priceP.appendChild(priceText)
   
    divProduct.append(title, priceP)
  })
  spantotal.textContent = ` ${totalSum}$`;
})()

const btnsubmit = document.getElementById("submit");
btnsubmit.addEventListener("click", deleteAll);

function deleteAll () {
    console.log("test");
    //delete all for localstorage
    localStorage.clear();
    division.textContent = "";
    spantotal.textContent = ` --- No orders yet ----`;
}