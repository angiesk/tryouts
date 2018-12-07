//console.log(process);
// console.log(process.argv);

// var flag = process.argv.indexOf('--user');

// console.log(flag);

process.stdout.write('Question??  ');
process.stdin.on('data', function (ans) {
    console.log(ans.toString().trim());
    process.exit();
});