const mongoose = require("mongoose")


const courseSchema = new mongoose.Schema({
    courseId : {type : Number},
    courseType : {type : String, required : true},
    courseName : {type : String, required : true},
    courseStartDate : {type : String, required : true},
    courseDescription : {type : String, required : true},
    deadline : {type : String, required : true},
    courseGuarantee : {type : String, required : true},
    courseMode : {type : String, required : true},
    courseDuration : {type : String, required : true},
    cutoffCognitiveAbl: {type: Number, },
    cutoffMettlTest: {type: Number, },
    cutoffCommunicationSkills: {type: Number, }
    
})

const formSchema = new mongoose.Schema({
    userId : {type : Object},
    mob : {type : Number},
    fullName:{type:String},
    emailId:{type:String},
    workingStatus:{type:String},
    receiveUpdates:{type:Array},
    gender:{type:String},
    dateOfBirth : {type : String},
    twelthDiplomaCompletion : {type : String},
    courseStartDate : {type : String},
    yearOfGraduation : {type : String},
    referralCode : {type : String},
    readyToWork : {type : String},
    coursesApplied:{type: Array},
    coursesPassed:{type:Array},
    
})

const mediumSchema = new mongoose.Schema({
    med1:{type:String},
    med2:{type:String},
    med3:{type:String},
    med4:{type:String}
})

const CourseModel = mongoose.model("course", courseSchema)
const FormModel = mongoose.model("userform", formSchema)
const MediumsModel = mongoose.model("medium", mediumSchema)


module.exports = {
    CourseModel, FormModel, MediumsModel
}