
let down = 0;

function isNumber(userAnwer){
    while(isNaN(userAnwer) === true || userAnwer === ""){
        userAnwer = prompt("Enter a number")
    }
    return userAnwer
}

function numberAtStart(i){
    console.log
}

function takeOneDown(p){
    if(p === 1){
        console.log(`Take {p} down, pass it around`)
    } else{
        console.log(`Take {p} down, pass them around`)
    }
}

function remaining(number, down){
    let remain = number - down;
    if (remain === 1){
        console.log(`${remain} bottle of beer on the wall`)
    } else{
        console.log(`${remain} bottles of beer on the wall`)
    }
    console.log(`${remain} bottles of beer on the wall`)
}


function song(){
    let askNumber = prompt("How many bottles would you like to start?")
    let number = isNumber(askNumber);
    for(let i = number; i > 0; i++ ){
        if(down >= i){
            down = i
        }
        down += 1
        numberAtStart(i)
        takeOneDown(down)
        remaining(i, down)
    }
}