const {model} = require('mongoose');
const {HoldingsSchema} = require('../schemas/HoldingsSchema');

const HoldingsModel = model("Holdings",HoldingsSchema);  // we dont' need to use new keyword with that since model is a function of mongoose not a class and it we used into schema folder it will give an erro

module.exports = {HoldingsModel}
