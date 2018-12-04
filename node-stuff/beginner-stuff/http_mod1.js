//Importing or rather  including the node http module which is a built in module
var http = require('http');
//Writing Server Side code
//creating serer using the func in http module
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('Echoing stuff on web browser like php');
}).listen(9000);