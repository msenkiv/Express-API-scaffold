const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// starting DB
mongoose.connect('PUT YOUR MONGO HERE');

requireDir('./src/models');

app.use('/api', require('./src/routes'));
console.log(3001);
app.listen(3001);
