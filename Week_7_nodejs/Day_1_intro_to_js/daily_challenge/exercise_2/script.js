const {largeNumber} = require('./main.js')
const http = require('http');
const b = 5;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.end(`<h1>Hi there at the frontend</h1><p>My module is ${largeNumber + b} </p>`)
});

server.listen(3000, () => {
  console.log("Running on port 3000")
})