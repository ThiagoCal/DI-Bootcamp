Promise.resolve( setTimeout (function () {
     return console.log("success")
    }, 4000))

// compareToTen(8)
// .then((res1)=>{
//   console.log(res1)
// })
// .catch((err)=>{
//   console.log("Error:", err)
// })let num = 10
function compareToTen(num){
  let promise = Promise.resolve(resolve => {if(num < 10){resolve(console.log("hello"))}});
  return promise
}

compareToTen(8)

Promise.resolve("Success").then(
  (value) => {
    console.log(value); // "Success"
  },
  (reason) => {
    // not called
  },
);