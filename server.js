var express = require('express'),
	path    = require('path'),
	http    = require('http');
var app = express();



app.use(express.static(__dirname));
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/public/index.html');
});


var server = http.createServer(app);
server.listen(2000);
console.log('Listening on port 7000...');
