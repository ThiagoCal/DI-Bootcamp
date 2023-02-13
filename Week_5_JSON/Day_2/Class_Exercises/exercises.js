
// Create a function that checks if an email contain the '@', if it doesnt, throw an error and catch it

function checkEmail(email){
  try{
    if(email.includes("@") == false){
      throw new Error('Invalid email');
    }else{
      console.log("Valid email")
    }
  } catch (err){
    console.log(err.message)
  }
}
checkEmail("johnsmith.com") // throw an exception that is caught
checkEmail("john@smith.com")  // will still run because the exception was caught



const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}

console.log("after")

//Assignment to constant variable.
//will console log after