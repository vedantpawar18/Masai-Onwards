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

dashboardController.get("/dashboard-details", async (req, res) => {

    if(!req.headers.authorization){
        return res.send("Please login again")
    }
    const token = req.headers.authorization.split(" ")[1]
    const courses = await CourseModel.find({})
    const userToken=decryptToken(token);

    const email= userToken.email || "email"
    const mobNumb=userToken.mobile || "mob";

    const mediums = await MediumsModel.find({});

    const user = await UserModel.find({ $or: [{ email:email }, { mob: mobNumb }] });
     
    if(!user[0]){
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
        console.log(err)
        res.status(400).send("something went wrong while creating course" )
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
        readyToWork } = req.body;

        if(!req.headers.authorization){
            return res.send("Please login again")
        }
        const token = req.headers.authorization.split(" ")[1]

        const userToken=decryptToken(token);

        const email= userToken.email || "email"
        const mobNumb=userToken.mobile || "mob"

        const user = await UserModel.find({ $or: [{ email:email }, { mob: mobNumb }] });
        if(!user){
            return res.status(404).send("User doesn't exists.")
        }

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
    const { courseId, congAbilityScore, MetTestScore, communicationScore, credibilityScore, status } = req.body;
    
        if(!req.headers.authorization){
            return res.send("Please login again")
        }
        const token = req.headers.authorization.split(" ")[1]
        const userToken=decryptToken(token);

        const email= userToken.email || "email"
        const mobNumb=userToken.mobile || "mob"

        const user = await UserModel.find({ $or: [{ email:email }, { mob: mobNumb }] });
        
        if(!user){
            return res.status(404).send("User doesn't exists.")
        }
        const userId =((user[0]._id))

        await UserModel.findOneAndUpdate({ _id: userId },{ $push: { coursesApplied: {courseId:courseId,congAbilityScore:congAbilityScore, MetTestScore:MetTestScore, communicationScore:communicationScore, credibilityScore:credibilityScore, status:status} } });

        await FormModel.findOneAndUpdate({ userId: userId },{ $push: { coursesApplied: {courseId:courseId,congAbilityScore:congAbilityScore, MetTestScore:MetTestScore, communicationScore:communicationScore, credibilityScore:credibilityScore, status:status} } });

        let message = "";
        let reqStatus = 200;

        if (userId && status=="pass") {
            reqStatus = 200;
            message = "Applied courses and course eligible is submitted to database";

            await UserModel.findOneAndUpdate({ _id: userId },{ $push: { coursesPassed: {courseId} } });
            await FormModel.findOneAndUpdate({ userId: userId },{ $push: { coursesPassed: {courseId} } });
           
        }
        else if(userId && status=="fail"){
            message = "Applied courses and courses not eligible is submitted to database";
            reqStatus = 200;

            await UserModel.findOneAndUpdate({ _id: userId },{ $push: { coursesFailed: {courseId} } });
            await FormModel.findOneAndUpdate({ userId: userId },{ $push: { coursesFailed: {courseId} } });
            
        }
        else{
            message = "User not found while storing user form data collection";
            reqStatus = 401;
        }
        res.status(reqStatus).send(message)
})

// --------------------------- creating db for user updates availibility ----------------------->

dashboardController.post("/notification-medium", async (req, res) => {
    const {med1, med2, med3, med4 } = req.body;

    const medium = new MediumsModel({
        med1, med2, med3, med4
    })
    try{
        await medium.save()
        res.status(200).send("mediums created")
    }
    catch(err){
        console.log(err)
        res.status(400).send("something went wrong while creating update mediums" )
    }
});

module.exports = {
    dashboardController
}