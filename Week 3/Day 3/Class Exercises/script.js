// setTimeout(bannerShow, 5000);

let banner = document.querySelector("#banner")

function bannerShow(){
    banner.style["display"] = "block"
}


const idInterval = setInterval(sayHello, 1000);
// console.log(id)

let counter = 100

function sayHello(){
    counter --;
    if(counter >= 0){
        console.log("Hello")
    } else{
        clearInterval(idInterval)
    }
}

let countDown = setInterval(myCountDown, 1000)

function myCountDown(){
    if(counter >= 0){
        document.querySelector("p").textContent = `The sales end in ${counter}sec`
    } else{
        clearInterval(countDown)
    }
    counter --;
}