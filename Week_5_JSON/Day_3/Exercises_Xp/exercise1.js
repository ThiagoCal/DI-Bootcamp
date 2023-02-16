function compareToTen(num){
  const mPromise = new Promise((resolve,reject)=>{
    if(num < 10){
      resolve("Num is less than ten")
    } else{
      reject("Num is greater than ten")
    }
  })
  return mPromise
}

compareToTen(8)
.then((res1)=>{
  console.log(res1)
})
.catch((err)=>{
  console.log("Error:", err)
})

