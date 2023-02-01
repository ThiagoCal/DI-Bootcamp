let animationInterval = setInterval(animationBox, 10)

let containerBox = document.getElementById("container")
let boxDiv = document.getElementById("animate")
let initialPosition = 0;
function animationBox(){
    initialPosition += 1;
    boxDiv.style.left = initialPosition + "px";
    boxDiv.style.top = initialPosition + "px";
    boxDiv.style.transform = "rotate("+initialPosition+"deg)"
    // boxDiv.style.width = initialPosition + "px"
    console.log(initialPosition)
    if(initialPosition === 350){
        console.log("hello")
        clearInterval(animationInterval);
    }
}

// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions