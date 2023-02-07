let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = () => {
  groceries["fruits"].forEach((elem) => console.log(elem))
}

displayGroceries()

const cloneGroceries = () => {
  let user = client;
  client = "Betty"
  console.log("client", client)

  const shopping = groceries;
  shopping.totalPrice = "35$";
  shopping.other["payed"] = false
  console.log("shopping", shopping, "groceries", groceries)
}

cloneGroceries()