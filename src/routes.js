const express = require('express');
const routes = express.Router();
const ProductController = require('./controller/ProductController');


routes.post('/callback', ProductController.worker)
routes.get('/', ProductController.getter)
module.exports = routes;