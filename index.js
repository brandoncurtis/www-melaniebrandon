var http = require('http');
var fs = require('fs');

//var sslPath = '/etc/letsencrypt/live/melanie.brandoncurtis.com/';
//var options = {
//  key: fs.readFileSync(sslPath + 'privkey.pem'),
//  cert: fs.readFileSync(sslPath + 'fullchain.pem')
//};


function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World! Melanie & Brandon's wedding details are coming soon!");
  response.end();
}


http.createServer(onRequest).listen(8888);

