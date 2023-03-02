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
    formId : {type : Number},
    userId : {type : Object},
    courseId : {type : Object},
    mobNumb : {type : Number},
    dateOfBirth : {type : String},
    twelthDiplomaCompletion : {type : String},
    courseStartDate : {type : String},
    yearOfGraduation : {type : String},
    referralCode : {type : String},
    readyToWork : {type : String},
    distanceLearning : {type : String},
    coursesApplies:{type:Array}
    
})

const CourseModel = mongoose.model("course", courseSchema)
const FormModel = mongoose.model("userform", formSchema)


module.exports = {
    CourseModel, FormModel
}