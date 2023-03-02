const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const {decryptToken}=require("../util/emailotp")
const {CourseModel} = require("../models/Dashboard.model");
const {FormModel} = require("../models/Dashboard.model");
const {MediumsModel} = require("../models/Dashboard.model");
const {UserModel} = require("../models/User.model")

const dashboardController = Router();

//  <----------------------Fetching Course -static data--------------------------------------------------> //

dashboardController.get("/course-details", async (req, res) => {

    if(!req.headers.authorization){
        return res.send("Please login again")
    }
    const courses = await CourseModel.find({})
    const token = req.headers.authorization
    const userToken=decryptToken(token);

    const email= userToken.email || "email"
    const mobNumb=userToken.mobile || "mob";

    const mediums = await MediumsModel.find({});

    const user = await UserModel.find({ $or: [{ email:email }, { mob: mobNumb }] });

    if(!user){
        return res.status(404).send("User doesn't exists.")
    }
    const userId =((user[0]._id))
    const userDetails=await FormModel.find({userId:userId});

    return res.status(200).json({msg : "Form submitted successfully",courses:courses, userFormDetails:userDetails, updateMediums:mediums[0]})
   
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
        res.status(200).send("course created")
    }
    catch(err){
        res.status(400).send("something went wrong while creating course", err)
    }
});


         //  <----------------------Form to collect user details after applying to a course--------------------------------------------------> //

dashboardController.post("/user-data-collection", async (req, res) => {
    const { mob ,
        fullName,
        emailId,
        gender,
        workingStatus,
        receiveUpdates,
        dateOfBirth ,
        twelthDiplomaCompletion ,
        courseStartDate ,
        yearOfGraduation ,
        referralCode ,
        readyToWork ,
        token} = req.body;

        const userToken=decryptToken(token);

        const email= userToken.email || "email"
        const mobNumb=userToken.mobile || "mob"

        const user = await UserModel.find({ $or: [{ email:email }, { mob: mobNumb }] });

        const userId =((user[0]._id))
        
        const userform = new FormModel({
            mob ,
            userId,
            fullName,
            emailId,
            gender,
            workingStatus,
            receiveUpdates,
            dateOfBirth ,
            twelthDiplomaCompletion ,
            courseStartDate ,
            yearOfGraduation ,
            referralCode ,
            readyToWork 
         })
    try{
        await userform.save()
        res.status(200).send("User-form created")
    }
    catch(err){
        console.log(err)
        res.status(400).send("something went wrong while creating course")
    }
})

dashboardController.post("/user-applied", async (req, res) => {
    const { courseId, congAbilityScore, MetTestScore, communicationScore, credibilityScore, status,
        token} = req.body;

        const userToken=decryptToken(token);

        const email= userToken.email || "email"
        const mobNumb=userToken.mobile || "mob"

        const user = await UserModel.find({ $or: [{ email:email }, { mob: mobNumb }] });
        console.log(status)
        const userId =((user[0]._id))

        if (userId && status=="pass") {
            await UserModel.findOneAndUpdate({ _id: userId },{ $push: { coursesApplied: {courseId:courseId,congAbilityScore:congAbilityScore, MetTestScore:MetTestScore, communicationScore:communicationScore, credibilityScore:credibilityScore, status:status} } });

            await FormModel.findOneAndUpdate({ userId: userId },{ $push: { coursesApplied: {courseId:courseId,congAbilityScore:congAbilityScore, MetTestScore:MetTestScore, communicationScore:communicationScore, credibilityScore:credibilityScore, status:status} } });

            await UserModel.findOneAndUpdate({ _id: userId },{ $push: { coursesEligibleFor: {courseId} } });
            await FormModel.findOneAndUpdate({ userId: userId },{ $push: { coursesEligibleFor: {courseId} } });
            res.status(200).json({msg:"Applied courses and course eligible is submitted to database"})
        }
        else if(userId && status=="fail"){
            await UserModel.findOneAndUpdate({ _id: userId },{ $push: { coursesApplied: {courseId:courseId,congAbilityScore:congAbilityScore, MetTestScore:MetTestScore, communicationScore:communicationScore, credibilityScore:credibilityScore, status:status} } });

            await FormModel.findOneAndUpdate({ userId: userId },{ $push: { coursesApplied: {courseId:courseId,congAbilityScore:congAbilityScore, MetTestScore:MetTestScore, communicationScore:communicationScore, credibilityScore:credibilityScore, status:status} } });

            await UserModel.findOneAndUpdate({ _id: userId },{ $push: { coursesNotEligibleFor: {courseId} } });
            await FormModel.findOneAndUpdate({ userId: userId },{ $push: { coursesNotEligibleFor: {courseId} } });
            res.status(200).json({msg:"Applied courses and courses not eligible is submitted to database"})
        }
        else{
            res.status(404).send("User not found while storing user form data collection")
        }
        
})

// --------------------------- creating db for user updates availibility ----------------------->

dashboardController.post("/create-mediums", async (req, res) => {
    const {medium1, medium2, medium3, medium4 } = req.body;

    const medium = new MediumsModel({
        medium1, medium2, medium3, medium4
    })
    try{
        await medium.save()
        res.status(200).send("mediums created")
    }
    catch(err){
        res.status(400).send("something went wrong while creating update mediums", err)
    }
});

module.exports = {
    dashboardController
}