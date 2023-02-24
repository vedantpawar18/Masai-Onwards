const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const {decryptToken}=require("../util/emailotp")
const {CourseModel} = require("../models/Dashboard.model");
const {FormModel} = require("../models/Dashboard.model");
const {UserModel} = require("../models/User.model")

const dashboardController = Router();

//  <----------------------Fetching Course -static data--------------------------------------------------> //

dashboardController.get("/course-details", async (req, res) => {
    const courses = await CourseModel.find({})
    console.log(courses[0]._id)
    return res.status(200).send(courses)
});

 //  <----------------------Course creation- static data--------------------------------------------------> //

dashboardController.post("/create-course", async (req, res) => {
    const {course_type ,
        course_name ,
        course_start_date ,
        course_description ,
        deadline ,
        course_guarantee ,
        course_mode ,
        course_duration,
        cutoff_cognitive_abl,
        cutoff_mettl_test,
        cutoff_communication_skills } = req.body;

    const course = new CourseModel({
        course_type ,
    course_name ,
    course_start_date ,
    course_description ,
    deadline ,
    course_guarantee ,
    course_mode ,
    course_duration ,
    cutoff_cognitive_abl,
    cutoff_mettl_test,
    cutoff_communication_skills
    })
    try{
        await course.save()
        res.send("course created")
    }
    catch(err){
        res.send("something went wrong while creating course", err)
    }
});


         //  <----------------------Form to collect user details after applying to a course--------------------------------------------------> //

dashboardController.post("/user-data-collection", async (req, res) => {
    const { mob_numb ,
        date_of_birth ,
        twelth_diploma_completion ,
        course_start_date ,
        year_of_graduation ,
        referral_code ,
        ready_to_work ,
        distance_learning,token, courseId} = req.body;

        const userToken=decryptToken(token);

        const email= userToken.email || "email"
        const mobNumb=userToken.mobile || "mob"

        const user = await UserModel.find({ $or: [{ email:email }, { mob_numb: mobNumb }] });

        const userId =((user[0]._id))

        await UserModel.findOneAndUpdate({ _id: userId },{ $push: { courses_applied: courseId } });
        
        const userform = new FormModel({
        userId,
        courseId,
        mob_numb ,
        date_of_birth ,
        twelth_diploma_completion ,
        course_start_date ,
        year_of_graduation ,
        referral_code ,
        ready_to_work ,
        distance_learning 
         })
    try{
        await userform.save()
        res.send("User-form created")
    }
    catch(err){
        res.send("something went wrong while creating course", err)
    }
})

module.exports = {
    dashboardController
}