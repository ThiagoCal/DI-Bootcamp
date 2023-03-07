const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')

const list_router = require('./routes/list.js')

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'));
dotenv.config()


app.use('/api/shopping_list', list_router)

app.listen(process.env.PORT, () =>{
  console.log(`run port ${process.env.PORT}`);
})
