let allBoldItems;
let paragraphElement = document.querySelector("p")
function getBold_Items(){
    allBoldItems = document.getElementsByTagName("strong")
}

getBold_Items();

console.log(allBoldItems)

function highlight(){
    let boldText = allBoldItems
    for(boldT of boldText){
       boldT.style.color = "blue"
    }
}

paragraphElement.addEventListener("mouseover", highlight)


function return_normal(){
    let boldText = allBoldItems
    for(boldT of boldText){
       boldT.style.color = "black"
    }
}
paragraphElement.addEventListener("mouseout", return_normal)
