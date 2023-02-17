const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    user_id : {type : Number},
    email : {type : String },
    password : {type : String},
    mob_numb: {type: String},
    full_name: {type: String, required: true}
})

const  UserModel = mongoose.model("User", userSchema)



module.exports = {
    UserModel
}