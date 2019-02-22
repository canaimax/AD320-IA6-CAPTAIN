net = require("net");


function form(n) { return n < 10 ? '0' + n : n; }

var server = net.createServer(function(socket){
	date    = new Date();
	year    = form(date.getFullYear());
	month   = form(date.getMonth()+1); // starts at 0
	day     = form(date.getDate());
	hours   = form(date.getHours());
	minutes = form(date.getMinutes());

	time = (year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n");
	socket.end(time);
});
server.listen(process.argv[2]);
