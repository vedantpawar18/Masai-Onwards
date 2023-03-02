const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userId : {type : Number},
    email : {type : String },
    password : {type : String},
    mob: {type: String},
    fullName: {type: String, required: true},
    coursesApplied: {type:Array},
    coursesEligibleFor:{type:Array},
    coursesNotEligibleFor:{type:Array}
})

const  UserModel = mongoose.model("User", userSchema)



module.exports = {
    UserModel
}