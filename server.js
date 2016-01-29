var path = require('path');
var express = require('express');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var development = process.env.NODE_ENV !== 'production';

var app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

if(development) {
  require('./devServer')();

  app.all('/build/*', function(req, res) {
    proxy.web(req, res, { target: 'http://localhost:8080' });
  });
}

app.listen(3000, function() {
  console.log('express server listening on 3000...');
});
