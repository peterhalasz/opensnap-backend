var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var snippets = require('./snippets/router.js');
var config = require('./config.js');

var app = express();

app.use(bodyParser.json())
app.use('/api', snippets);

app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    console.error('Unable to listen for connections', error);
    process.exit(10);
  }

  mongoose.connect(`mongodb://${config.mongo.ip}:${config.mongo.port}/${config.mongo.database}`);

  var db = mongoose.connection;

  db.on('error', function() {
    console.log('Database connection error')
    process.exit(10);
  });

  
  console.log('OpenSnap Backend is listening on http://' + config.express.ip + ':' + config.express.port);
});
