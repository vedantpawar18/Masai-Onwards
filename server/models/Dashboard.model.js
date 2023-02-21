const mongoose = require("mongoose")


const courseSchema = new mongoose.Schema({
    course_id : {type : Number},
    course_type : {type : String, required : true},
    course_name : {type : String, required : true},
    course_start_date : {type : String, required : true},
    course_description : {type : String, required : true},
    deadline : {type : String, required : true},
    course_guarantee : {type : String, required : true},
    course_mode : {type : String, required : true},
    course_duration : {type : String, required : true},
    cutoff_cognitive_abl: {type: Number, },
    cutoff_mettl_test: {type: Number, },
    cutoff_communication_skills: {type: Number, }
    
})

const formSchema = new mongoose.Schema({
    form_id : {type : Number},
    mob_numb : {type : Number},
    date_of_birth : {type : String},
    twelth_diploma_completion : {type : String},
    course_start_date : {type : String},
    year_of_graduation : {type : String},
    referral_code : {type : String},
    ready_to_work : {type : String},
    distance_learning : {type : String}
    
})

const CourseModel = mongoose.model("course", courseSchema)
const FormModel = mongoose.model("userform", formSchema)


module.exports = {
    CourseModel, FormModel
}