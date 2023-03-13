var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write(JSON.stringify(process.env));
    res.end();
}).listen(3003);
