let string1 = "Astronomer";
let string2 = "Moon starer";

function isAnagram(a,b){
  a = a.trim().toLowerCase()
  b = b.trim().toLowerCase()
  let aArray = a.split("").filter(entry => entry.trim() != '').sort().join();
  let bArray = b.split("").filter(entry => entry.trim() != '').sort().join();
  // console.log(aArray)
  // console.log(bArray)
  if(aArray === bArray){
    return console.log('hello')
  }
 
}

isAnagram(string1, string2)