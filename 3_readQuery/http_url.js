var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.a + " && " + q.b;
  res.end(req.url+'<br>'+txt);
}).listen(8080);

//http://localhost:8080/?a=xx&b=yyy