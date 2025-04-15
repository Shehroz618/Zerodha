const {model} = require('mongoose');
const {UserSchema} = require('../schemas/UserSchema');

const UserModel = model("Users",UserSchema)

module.exports = UserModel