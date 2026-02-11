require('elastic-apm-node').start({
  serviceName: 'sandbox-nodejs-app',
  serverUrl: 'http://13.60.28.212:8200',
  environment: 'sandbox',
  captureBody: 'all',
  logLevel: 'info'
});

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Node app is running on port ${PORT}`);
});
