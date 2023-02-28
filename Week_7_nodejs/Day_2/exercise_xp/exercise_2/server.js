const http = require('http');

const user = {
  firstname: 'John',
  lastname: 'Doe'
}

const server = http.createServer((req, res)=>{
  res.end(`<p>${JSON.stringify(user)}</p>`)
})

server.listen(8085, ()=>{
  console.log("run on port 8085")
})