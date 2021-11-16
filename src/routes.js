const express = require('express');
const routes = express.Router();

const ApiController = require('./controllers/businessController');

// Controllers
routes.post('/business', ApiController.businessBling);
routes.get('/business', ApiController.getBusiness);
routes.post('/business/order', ApiController.createBusinessOrder);

module.exports = routes;


// db.order.createBusinessOrder([
//     { _id: 0, title: "Alexia", status: "new", won_time: 10:55, integration:"true"},
//     { _id: 1, title: "Alexia", status: "urgent", won_time: 11:00, integration:"true"},
//     { _id: 2, title: "Alexia", status: "urgent", won_time: 11:01, integration:"true"},
//     { _id: 3, title: "Iron rod", status: "new", won_time: 12:00, integration:"false"},
//     { _id: 4, title: "Iron rod", status: "urgent", won_time: 12:01, integration:"false"},
//     { _id: 5, title: "Iron rod", status: "urgent", won_time: 12:03, integration:"false"}
//  ]);