const express = require('express');
const path = require('path');
const bmi = require('./routes/bmi');

const app = express();
app.use('/', require(path.join(__dirname, 'routes/bmi.js')))

app.listen(3000);