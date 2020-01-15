const http = require('http');

const server = http.createServer((req, res)=> {
    if (req.url === '/') {
        res.write('Hello world')
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,3,4,5,6,]))
        res.end();
    }
})

server.on('connection', socket =>{
    console.log('new connection')
})

server.listen(3000)

console.log('listening on 3000...')



