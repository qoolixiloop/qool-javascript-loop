#!/usr/bin/env node

/*shows shebang for node, http server, call own module*/

var http = require('http');
var dt = require('./Snip_4_mymodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8082); 
