
var fsio = require('fs');


var buff = fsio.readFileSync(process.argv[2]);

var str = buff.toString().split('\n');

console.log(str.length - 1);
