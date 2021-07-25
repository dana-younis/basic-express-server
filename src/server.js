'use strict';

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

app.use(logger);

app.get('/person', validator, (req, res) => {
  console.log('person:', req.query.name);
  res.send({ name: req.query.name });
});
app.get('/', (req, res) => {
  res.send('I have deployed this using AWS Elastic Beanstalk');
});
app.get('/data', (req, res) => {
  res.json({ a: 1, b: 2 });
});
app.use(express.json());

app.use('*', notFound);

app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`server up on ${port}`);
    });
  },
};
