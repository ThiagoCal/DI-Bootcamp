//Pallet Creation


let colors = ["#69D2E7","#A7DBD8","#E0E4CC","#F38630","#FA6900","#FE4365",
"#FC9D9A","#F9CDAD","#C8C8A9","#83AF9B",
 "#ECD078","#D95B43","#C02942","#542437","#53777A",
  "#556270","#4ECDC4","#C7F464","#FF6B6B","#C44D58",
   "#774F38"]

let pallet = document.getElementById("palleteSec") 


function creatingPalletDivs(){
    for(let color of colors){
        console.log(colors)
        let divColor = document.createElement("div")
        divColor.style.backgroundColor = color
        divColor.addEventListener('click', retriveColor)
        divColor.setAttribute("id", color)
        pallet.appendChild(divColor)
    }
}

creatingPalletDivs();

//Grid Creation

let grid = document.getElementById("gridSec")

function creatingGrid(){
    let count = 24*60
    for(let i = 1; i <= count; i++){
        let gridDiv = document.createElement("div")
        gridDiv.setAttribute("class", "gridStyle")
        gridDiv.addEventListener("click", addColor)
        gridDiv.addEventListener("mouseover", mouseOver)
        gridDiv.addEventListener("mousedown", mouseDown)
        gridDiv.addEventListener("mouseup", mouseUp)
        grid.appendChild(gridDiv)
    }
}

creatingGrid();

let chosenColor;

function retriveColor(event){
    chosenColor = event.target.id
    console.log(chosenColor)
}

function addColor(e){
    e.target.style.backgroundColor = chosenColor;
}

let checkIfMouseDown = false;
function mouseDown(e){
    checkIfMouseDown = true;
    addColor(e);
}

function mouseUp(e){
    checkIfMouseDown = false;
}

function mouseOver(e){
    if(checkIfMouseDown === true){
        addColor(e);    
    }
}


let clearGrid = document.getElementById("clearBtn")

clearGrid.addEventListener("click", clearDrawing)

function clearDrawing(){
    for(g of grid.childNodes){
        g.style.backgroundColor = "white"
    }
}