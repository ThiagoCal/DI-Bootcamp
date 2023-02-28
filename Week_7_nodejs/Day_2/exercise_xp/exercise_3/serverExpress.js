const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'));

app.listen(3000, ()=>{
  console.log('run on port 3000')
})

app.get('/', (req,res)=>{
  res.end(`<h1>This is an HTML tag</h1>`)
})