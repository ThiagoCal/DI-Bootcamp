const {date} = require('./main_date.js')

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.end(`<p>The date and time are currently: ${date}</p>`)
})


server.listen(8080, () => {
  console.log("Server running on port 8080")
})