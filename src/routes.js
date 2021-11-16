const express = require('express');
const routes = express.Router();

const ApiController = require('./controllers/businessController');

// Controllers
routes.post('/business', ApiController.businessBling);
routes.get('/business', ApiController.getBusiness);
routes.post('/business/order', ApiController.createBusinessOrder);

module.exports = routes;


