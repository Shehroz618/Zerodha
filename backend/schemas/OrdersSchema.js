const {Schema} = require('mongoose');
const {model} = require('mongoose');

const ordersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String
})

const ordersModel = new model("orders",ordersSchema)

module.exports = ordersModel