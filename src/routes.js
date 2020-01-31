const express = require('express');
const routes = express.Router();
const ProductController = require('./controller/ProductController');



routes.post('/callback', ProductController.worker)
module.exports = routes;