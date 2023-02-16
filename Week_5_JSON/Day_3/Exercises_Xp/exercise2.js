function compareToTen(num){
    if(num < 10){
      Promise.resolve("Num is less than ten")
    } else{
      Promise.reject("Num is greater than ten")
    }
}

compareToTen(8)
.then((res1)=>{
  console.log(res1)
})
.catch((err)=>{
  console.log("Error:", err)
})
