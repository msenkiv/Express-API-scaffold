const express = require('express');
const routes = express.Router();
const ProductController = require('./controller/ProductController');
const cors = require('cors');


routes.post('/callback',cors(), ProductController.worker)
module.exports = routes;