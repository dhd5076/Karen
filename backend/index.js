'use strict';

const express = require('express');

// Constants
const PORT = 801;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT);
console.log(`Runing on port: ${PORT}}`);