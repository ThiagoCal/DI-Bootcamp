const fs = require('fs');

const data = "Some text to see";

// fs.writeFile('text', data, "utf-8", (err)=>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log('File created')
//   }
// })


// const info = fs.readFile('text', 'utf-8', (err, data)=>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log(data)
//     console.log('file has been read')
//   }
// })

// const data2 = ' appended text'

// fs.appendFile('text', data2, "utf-8", (err)=>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log('File created')
//   }
// })


// const info = fs.readFile('text', 'utf-8', (err, data)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log(data)
//       console.log('file has been read')
//     }
//   })

// fs.unlink('text', (err)=>{
//   console.log(err)
// })