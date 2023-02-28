const fs = require('fs');

// const data = 'This is my hello file';
// const data = 'This is my hello fileaaaaa'; //this overwrites the file


const products = [
  {
    id: 1,
    name: "iphone",
    price: 4500,
    description: "this is a phone"
  },
  {
    id: 2,
    name: "computer",
    price: 6500,
    description: "this is a computer"
  },
  {
    id: 3,
    name: "monitor",
    price: 700,
    description: "this is a monitor"
  },
  {
    id: 4,
    name: "ipad",
    price: 2500,
    description: "this is a monitor"
  }
]

// fs.writeFile('product.txt', JSON.stringify(products), 'utf-8', (err)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('file created')
//   }
// })

// try{
//   const data = fs.readFileSync('product.txt');
//   console.log(JSON.parse(data.toString()))
// }
// catch(err){
//   console.log(err)
// }

fs.copyFile('.env', '.env2',(err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log('file copied')
  }
})

// fs.writeFile('hello', data, 'utf-8', (err)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log('file created')
//   }
// })

// try{
//   const data = fs.readFileSync('.env');
//   console.log(data.toString())
// }
// catch(err){
//   console.log(err)
// }

// const info = fs.readFile('.env', 'utf-8', (err, data)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(data)
//   }
// });


console.log('the file has been read')