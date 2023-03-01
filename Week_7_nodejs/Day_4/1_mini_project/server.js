const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use('/', express.static(__dirname+'/public'))


app.listen(3200, ()=>{
  console.log('run on port 3200')
});

const shopping_list = []

app.post('/formData',(req,res)=>{
  // if(typeof req.body.product !== 'string'){
  //   return res.status(404).json({msg:"invalid data"})
  // }
  shopping_list.push(req.body)
  console.log(shopping_list)
  res.status(200).json(req.body)
})