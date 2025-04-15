const {model} = require('mongoose');
const {ordersSchema} = require('../schemas/OrdersSchema');

const ordersModel = model('orders',ordersSchema)

module.exports = {ordersModel}