const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Hello world')
  if(req.url === '/'){
    res.end('<h1>Home - Page</h1>')
  }
  else if(req.url === '/about'){
    res.end('<h1>About Page </h1><p>Lorem ipsum</p>')
  }
  else {
    res.end('<h1>404 Page not found </h1>')
  }
  // res.end('hello from the server')
})

server.listen(5001, () => {
  console.log('run on port 5001')}
)