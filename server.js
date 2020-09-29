const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

app.use(express.json());
app.use(cors)
app.options('*', cors());

// starting DB
console.log('BACON FDP')
mongoose.connect('mongodb+srv://root:root@apitestcluster-iynoc.mongodb.net/test?retryWrites=true&w=majority');

requireDir('./src/models');
// Add headers



app.use('/api', require('./src/routes'));
var porta = process.env.PORT || 8080;
app.listen(porta);
