var express = require('express');
var snippets = require('./snippets/router.js');
var config = require('./config.js');

var app = express();

app.use('/api', snippets);

app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    console.error('Unable to listen for connections', error);
    process.exit(10);
  }
  
  console.log('express is listening on http://' + config.express.ip + ':' + config.express.port);
});
