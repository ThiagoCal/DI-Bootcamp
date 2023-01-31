const formCreateSentence = document.querySelector("#libform");

formCreateSentence.addEventListener("submit", retrieveData);

function retrieveData(evt){
    evt.preventDefault();
    const allInputs = formCreateSentence.querySelectorAll("input");
    let allValues = [];
    let object1 = {};
    for (let input of allInputs) {
        if(input.value == ""){
           allValues.splice(0, allValues.length);
           console.log("TRY AGAIN TO FILL EVERYTHING");
           return;
        } else {
            if(input.id === "noun"){
                object1.noun = input.value
            }
            else if(input.id === "adjective"){
                object1.adjective = input.value
            }
            else if(input.id === "person"){
                object1.person = input.value
            }
            else if(input.id === "verb"){
                object1.verb = input.value
            }
            else if(input.id === "place"){
               object1.place = input.value
            }
        } 
    }
    const sentence = `${object1.noun} is ${object1.adjective} and ${object1.verb} ${object1.person} at ${object1.place}`;
    console.log(sentence);
}
