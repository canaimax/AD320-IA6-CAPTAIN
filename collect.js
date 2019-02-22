
var http = require('http'),
    bl = require('bl');

http.get(process.argv[2], function(res) {
    res.pipe(bl(function(x, data) {
      //  if (err) {
      //      return console.error(err);
      //  }


        console.log(data.length);

              data = data.toString();
        console.log(data);
    }));
});

//.pipe(bl(function (err, data) { // note 'new' isn't strictly required
  // `data` is a complete Buffer object containing the full data
//  console.log(data.toString())
