const express = require('express');
const {products} = require('./database/products.js');
const cors = require('cors');
const dotenv = require('dotenv')
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'));
dotenv.config()


app.listen(process.env.PORT, () =>{
  console.log(`run port ${process.env.PORT}`);
})

app.get('/api/products', (req, res) =>{
  res.json(products);
  console.log(products);
})

app.get('/api/products/:id', (req, res) => {
  console.log(req.params);
  const product_id = req.params.id;
  const product = products.find(item =>{
    return item.id ==  product_id;
  })
  if(!product){
    return res.status(404).json({msg:'not found'});
  }
  res.json(product);
})

app.get('/api/search', (req, res) => { 
  console.log(req.query.q);
  let product_q = req.query.q;
  console.log(typeof product_q);
  const filter_prod = products.filter(item =>{
    return item.name.toLowerCase().includes(product_q.toLowerCase());
  })
  if(filter_prod.length === 0){
    return res.status(200).json({msg:'no such product'});
  }
  res.json(filter_prod);
})

app.post('/api/products', (req,res)=>{
  const new_product = {
    id: products.length +1,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  }
  products.push(new_product)
  console.log(req.body);
  res.status(200).json(products)
  // res.sendStatus(200);
})

app.put('/api/products/:id', (req,res)=>{
  const id = req.params.id;
  const index = products.findIndex(item => item.id == id);
  if(index === -1){
    return res.status(404).json({msg:'product not found'})
  }
  const updateProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  }

  products[index] = updateProduct
  res.status(200).json(products)
})

app.delete('/api/products/:id',(req,res)=>{
  const id = req.params.id;
  const index = products.findIndex(item => item.id == id);
  if(index === -1){
    return res.status(404).json({msg: 'product not found'});
  }
  products.splice(index, 1);
  res.status(200).json(products);
})