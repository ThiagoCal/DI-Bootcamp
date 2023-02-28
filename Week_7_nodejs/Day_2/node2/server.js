const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'));

app.listen(4000, () =>{
  console.log('run port 4000');
})

const user = {
  firstname: 'John',
  lastname: 'Doe'
}

app.get('/api/user', (req, res) =>{
  res.json(user);
  console.log(user);
})


app.get('/api/user/:id', (req, res) =>{
  let params = req.params
  console.log(params)
  res.json(user);
  console.log(user);
})