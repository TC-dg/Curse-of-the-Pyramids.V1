const http = require('http');

const Port = 3000;

const server = http.createServer((req, res) => {
  res.write('Success connent Server.');
  res.end();
});

server.listen(Port, () => {
  console.log(`>Location  http://127.0.0.1:${Port}`);
});
