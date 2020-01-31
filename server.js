const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// starting DB
mongoose.connect('mongodb+srv://root:root@emaily-o8cjy.gcp.mongodb.net/test?retryWrites=true&w=majority');

requireDir('./src/models');

app.use('/api', require('./src/routes'));
console.log(3001);
app.listen(3001);