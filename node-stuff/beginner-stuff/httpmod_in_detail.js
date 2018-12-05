var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write("Server Created!!");
    res.write("<br><hr><br>reading and writingthe request query string:" + req.url);
    /**Example request url: http://localhost:9800/submit
     * output: /submit
     */
    //res.write();
    //res.write();
    res.end();
}).listen(9800);