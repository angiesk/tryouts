var readline = require('readline');
var rLine = readline.createInterface(process.stdin, process.stdout);
var util = require('util');
rLine.question('age??', (age) => {
    if (age >= 18) {
        util.log(`Adult,so proceed`);
        rLine.setPrompt('dob?');
        rLine.prompt();
        rLine.on('line', (dob) => {
            util.log(`Adult,so proceed`);
            rLine.close();
        });
    } else {
        util.log(`To young to proceed`);
        rLine.close();
    }

});