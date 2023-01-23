//Exercise 1

let userPrompt = prompt("Which language do you speak?", " ").toLowerCase()


console.log(userPrompt)

switch (userPrompt){
    case 'french': alert('Bonjour');
    break;

    case 'hebrew': alert('Shalom!')
    break;

    case 'english': alert('Hello!')
    break;

    case 'english': alert('Hello!')
    break;

    default: alert('01110011 01101111 01110010 01110010 01111001');
}

//Exercise 2

let userGrade = prompt("Tell me your grade?", " ").toLowerCase()

if(userGrade > 90){
    console.log("A");
}
else if( userGrade > 80 && userGrade <= 90){
    console.log("B");
}
else if(userGrade > 70 && userGrade <= 80){
    console.log("C");
}
else{
    console.log("D");
}


//Exercise 3

let userVerb = prompt("Give me a verb", " ").toLowerCase();

if(userVerb.length > 3){
    if(userVerb.substring(userVerb.length - 3) !== "ing"){
        console.log(userVerb+"ing")
    }
    else if(userVerb.substring(userVerb.length - 3) === "ing"){
        console.log(userVerb+"ly")
    }
} else{
    console.log(userVerb)
}