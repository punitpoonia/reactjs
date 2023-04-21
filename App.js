const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('homepage.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found.');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    res.end();
  });
});
server.listen(4000, () => {
  console.log('Server running on port 4000');
});
