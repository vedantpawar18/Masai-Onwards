const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userId : {type : Number},
    email : {type : String },
    password : {type : String},
    mob: {type: String},
    fullName: {type: String, required: true},
    coursesApplied: {type:Array},
    coursesPassed:{type:Array},
    coursesFailed:{type:Array},
})

const googleAuthUserSchema = new mongoose.Schema({
    userId : {type : Number},
    email : {type : String }, 
    fullName: {type: String } 
})

const  UserModel = mongoose.model("User", userSchema)
const  GoogleAuthUserModel = mongoose.model("GoogleAuthUser", googleAuthUserSchema)



module.exports = {
    UserModel,GoogleAuthUserModel
}