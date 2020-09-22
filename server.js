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
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://cosmlov.com.br/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/api', require('./src/routes'));
var porta = process.env.PORT || 8080;
app.listen(porta);
