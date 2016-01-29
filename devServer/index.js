var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

module.exports = function() {
  console.log(config.entry[2]);
  var devServer = new webpackDevServer(webpack(config), {
    publicPath: '/build/',
    hot: true,
    stats: {
      colors: true
    }
  });

  devServer.listen(8080, 'localhost', function() {
    console.log('Dev server listening on 8080...');
  });
}
