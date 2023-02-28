const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'));

app.use(express.static('/public'));

app.get('/aboutMe/:hobby', (req,res)=>{
  let params = req.params.hobby;
  console.log(params)
  if(typeof params !== 'string'){
    res.status(404).json({msg: 'invalid data'})
  }
  res.json(params)
  console.log(params)
})

app.route("/").get(function (req, res) {
  res.sendFile(path.join(__dirname, '/form.html'));
});


app.listen(7500, ()=>{
  console.log("run on port 7500");
})

// https://www.twilio.com/blog/build-contact-form-node-js-sendgrid