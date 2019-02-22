
var fsasync = require('fs');

var buff = fsasync.readFile(process.argv[2], 'utf8', function(err, data) {
  //  if (err) {
  //      throw err;
  //  }

    var strline = data.split('\n');

    console.log(strline.length - 1);
});
