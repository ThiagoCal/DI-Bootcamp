const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'));

app.get('/aboutMe/:hobby', (req,res)=>{
  let params = req.params.hobby;
  console.log(params)
  if(!isNaN(params)){
    return res.status(404).json({msg: 'invalid data'})
  }
  res.status(200).send(params)
})

//getting image from /public/images folder
app.get('/pic',(req,res)=>{
  res.sendFile(__dirname+ '/public/pic.html')
})

//get data from de form
app.post('/formData',(req,res)=>{
  if(!validateEmail(req.body.email)){
    console.log("invalid data")
    return res.status(404).json({msg: 'invalid data'})
  }
  res.status(200).json(req.body)
})

app.listen(7500, ()=>{
  console.log("run on port 7500");
})


function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
    // alert("You have entered an invalid email address!")
    return false
}

function validateMessage(message) 
{
 if (typeof message === 'string')
  {
    return (true)
  }
    alert("You have entered an invalid message!")
    return (false)
}
// https://www.twilio.com/blog/build-contact-form-node-js-sendgrid