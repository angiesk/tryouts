//First task
console.log("HELLO WORLD");
//console.log(process.argv);
//console.log(process.argv);
//console.log(process.argv.length);
//Second Task
args=process.argv;
//console.log("args:"+args)
sum=0;
for(i=2;i<args.length-2;i++)
{
    sum+=Number(args[i]);
}
console.log(sum);