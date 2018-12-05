console.log("working with logs");
//var n="sdfief" window.n is the same as n as vars get added to window obj
global.console.log("gloabal: working with logs");

var temp = "ffafw";
var text = temp.toUpperCase(temp);

console.log(__dirname);
console.log(__filename);

var path = require('path');
console.log("\n" + path.basename(__filename));