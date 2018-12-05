var http = require('http');
var mods = require('./custom_mod');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // res.write("Date and Time:" + mods.myDateTime.dt());
    res.write("Sum:" + mods.calculations(9, 5));
    //res.write();
    res.end("<br>end!!");
}).listen(9800);