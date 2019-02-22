

var fs = require('fs'),
    path = require('path'),
    filepath = process.argv[2],
    ext = process.argv[3];

fs.readdir(filepath, function(err, files) {
path.extname(files);
console.log(files);

}
