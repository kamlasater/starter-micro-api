var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url} with NU_VAR=${process.env.NU_VAR}`)
    res.write(JSON.stringify(process.env));
    res.end();
}).listen(8003);
