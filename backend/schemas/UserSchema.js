const passportLocalMongoose = require("passport-local-mongoose");
const {Schema,model}  = require('mongoose')

const UserSchema = new Schema({

  username:{
    type: String,
    required: true,
    unique: true,
  },
    email: {
        type: String,
        required: true,
        unique: true
      
      },
      
   
})

UserSchema.plugin(passportLocalMongoose);

const UserModel = new model("User",UserSchema)

module.exports = {UserModel}

