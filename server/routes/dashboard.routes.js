const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {CourseModel} = require("../models/Dashboard.model");
const {FormModel} = require("../models/Dashboard.model");

const dashboardController = Router();

//  <----------------------Fetching Course -static data--------------------------------------------------> //

dashboardController.get("/course-details", async (req, res) => {
    const courses = await CourseModel.find({})
    res.send(courses)
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
        distance_learning } = req.body;
        
    const userform = new FormModel({
        mob_numb ,
        date_of_birth ,
        twelth_diploma_completion ,
        course_start_date ,
        year_of_graduation ,
        referral_code ,
        ready_to_work ,
        distance_learning , token
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