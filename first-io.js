var fs = require('fs');
var str = fs.readFileSync(process.argv[2]);
var splitted = str.toString().split("\n");
console.log(splitted.length-1);
