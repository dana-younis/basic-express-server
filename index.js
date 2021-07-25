'use strict';
require('dotenv').config();
const server = require('./src/server');

server.start(process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.send('I have deployed this using AWS Elastic Beanstalk');
  });
  app.get('/data', (req, res) => {
    res.json({ a: 1, b: 2 });
  });