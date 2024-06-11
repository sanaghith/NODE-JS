const http = require('http')
const server = http.createServer((req, res) => {
    res.end('<h1>hello world</h1>');
});
server.listen(3000)