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
    const {courseType ,
        courseName ,
        courseStartDate ,
        courseDescription ,
        deadline ,
        courseGuarantee ,
        courseMode ,
        courseDuration,
        cutoffCognitiveAbl,
        cutoffMettlTest,
        cutoffCommunicationSkills } = req.body;

    const course = new CourseModel({
        courseType ,
        courseName ,
        courseStartDate ,
        courseDescription ,
        deadline ,
        courseGuarantee ,
        courseMode ,
        courseDuration,
        cutoffCognitiveAbl,
        cutoffMettlTest,
        cutoffCommunicationSkills
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
    const { mob ,
        dateOfBirth ,
        twelthDiplomaCompletion ,
        courseStartDate ,
        yearOfGraduation ,
        referralCode ,
        readyToWork ,
        distanceLearning,token, courseId} = req.body;

        const userToken=decryptToken(token);

        const email= userToken.email || "email"
        const mobNumb=userToken.mobile || "mob"

        const user = await UserModel.find({ $or: [{ email:email }, { mob: mobNumb }] });

        const userId =((user[0]._id))

        if (user) {await UserModel.findOneAndUpdate({ _id: userId },{ $push: { coursesApplied: {courseId:courseId} } });
        }else{
            res.send("User not found while storing user form data collection")
        }
        
        const userform = new FormModel({
        userId,
        courseId,
        mob ,
        dateOfBirth ,
        twelthDiplomaCompletion ,
        courseStartDate ,
        yearOfGraduation ,
        referralCode ,
        readyToWork ,
        distanceLearning 
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