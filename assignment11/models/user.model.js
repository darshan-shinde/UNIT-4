const module = require("mongoose")

const userSchema = new mongoose.Schema({

    name : { type: String, required: true},
    email : { type: String, required: true,unique: true},
    password : { type: String, required: true}

},
{
  timestamps : { type: String, required: true},
  versionKey  : { type: String, required:false}
})

module.exports = {userSchema}