let myAge = 35;

function parentsAge(myAge){
    let mum = myAge *2;
    let dad = mum * 1.2;
    console.log(`my dad age is: ${dad}, My mum age is ${mum}`);
}

parentsAge(myAge);


function parentsAge2(myAge2){
    let mum = myAge *2;
    let dad = mum * 1.2;
    let result = `my dad age is: ${dad}, My mum age is ${mum}`
    return result;
}

let myParentsAgeSentence = parentsAge2(35);
console.log(myParentsAgeSentence)


// Exercise 1
// You are the manager of the chocolate factory, in order to make your clients happy you will send them a gift depending on their quantity of chocolate box they ordered.

// Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.
function checkQuantityOrder(quantity){
    if(quantity >= 5 && quantity <= 10){
        console.log("Dear client, you won a bouquet of flowers");
    }
    else if(quantity > 10 && quantity <= 20){
        console.log("Dear client, you won a bottle of wine");
    }
    else if( quantity > 20){
        console.log("Dear client, you won a trip to Paris")
    }
}


// If the client ordered more between 5 and 10 boxes (included) console.log "Dear client, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear client, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear client, you won a trip to Paris"
// Call the function a few times,

checkQuantityOrder(8);
checkQuantityOrder(15);
checkQuantityOrder(30);

// BONUS : add a parameter to the function, the name of the client. If you don't know the name of the client, call him/her "client"
function checkQuantityOrder2(quantity2){
    if(quantity2 >= 5 && quantity2 <= 10){
        return 'a bouquet of flowers';
    }
    else if(quantity2 > 10 && quantity2 <= 20){
        return 'a bottle of wine';
    }
    else if( quantity2 > 20){
        return 'a trip to Paris';
    }
}

// If the client ordered more between 5 and 10 boxes (included) console.log "Dear <name_client>, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear <name_client>, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear <name_client>, you won a trip to Paris"
// Call the function a few times,

// checkQuantityOrder2(8, "John");
// checkQuantityOrder2(15);
// checkQuantityOrder2(30, "David");

function sendGift(quantity, client="client"){
    let gift = checkQuantityOrder2(quantity);
    let answer = `Dear ${client}, you won ${gift}`;
    return answer;
}
// Modify the function checkQuantityOrder, so that instead of console logging "Dear client, you won a ..." it will return the gift.
// Create a function sendGift, it retrieves the return value of the function checkQuantityOrder and console log "Dear client, you won a ..."
console.log(sendGift(10, "John"))