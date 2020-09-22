const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const corsOptions = {
    origin: 'https://cosmlov.com.br',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

// starting DB
mongoose.connect('mongodb+srv://root:root@apitestcluster-iynoc.mongodb.net/test?retryWrites=true&w=majority');

requireDir('./src/models');

app.use('/api', require('./src/routes'));
var porta = process.env.PORT || 8080;
app.listen(porta);
