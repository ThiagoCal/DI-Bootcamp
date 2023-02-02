function setDraggable(){
    let draggableBoxes = document.querySelectorAll(".draggedItem")
    for(let items of draggableBoxes){
        items.setAttribute("draggable", true);
        items.addEventListener("dragstart", startDragging);
    }
}

setDraggable();

function startDragging(evt){
    evt.target.classList.add("startDrag");
    evt.dataTransfer.setData("text/plain", evt.target.id);
    //use the dataTransfer object, to set the data that we want to drop in the future
    // console.log(evt.target.id);
    // console.log(evt.target); //box I drag
}

//2. Retrieve all the dropzones
function retrieveZonesAndAddEvents () {
    const allZones = document.querySelectorAll(".dropzone");
    // Give to each dropzone an event listener; loop
    for (let zone of allZones) {
        zone.addEventListener("dragover", overTarget);
        zone.addEventListener("drop", dropOnTarget);
    }
}

function retrieveOriginZoneAndAddEvents () {
    const origin = document.querySelector("#section2");
    // Give to each dropzone an event listener; loop
    
    origin.addEventListener("dragover", overTarget);
    origin.addEventListener("drop", dropOnTarget);

}


retrieveZonesAndAddEvents()
retrieveOriginZoneAndAddEvents()


function overTarget (evt) {
    evt.preventDefault(); //necessary
    evt.target.classList.add("overDrop");
}

function dropOnTarget (evt) {
    evt.preventDefault();  //necessary
    evt.target.classList.add("droppedTarget");
    const data = evt.dataTransfer.getData("text/plain"); //id of the element
    // console.log(data);
    const elem = document.getElementById(data);
    evt.target.appendChild(elem);
}