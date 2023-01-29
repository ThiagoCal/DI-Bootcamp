let entry = ""
let memory = ""


function writeMemory(){
    let box = document.getElementById("memory")
    box.innerHTML = memory;
}

function writeEntry(){
    let entryBox = document.getElementById("entry");
    entryBox.innerHTML = entry;
}

function number(num){
    entry += num;
    writeEntry();
}

function operator(operator){
    let operators = ["+", "-", "*", "/"];
    let lastCharacter = memory[memory.length - 1];
    if(operators.includes(lastCharacter)){
        memory = memory.slice(0, -1);
    }
    memory += entry + operator;
    writeMemory();
    entry = "";
    writeEntry();
}

function equal(){
    memory += entry;
    writeMemory();
    entry = eval(memory);
    writeEntry();
}


function reset(){
    memory = "";
    entry = "";
    writeEntry();
    writeMemory();
}

function clearEntry(){
    entry = "";
    writeEntry();
}
