const {Router} = require("express")
const {UserModel} = require("../models/User.model")
const userController = Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

userController.post("/signup", async(req, res) => {
    const {email, password, full_name,mob_numb} = req.body;

    //  If user is signed up with email id 

    //  function to validate email id.
    function validateemail(mail)  
    {  
    var x=mail;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      return false;  
      } 
      else{
        return true;
      } 
    } 

    // function to validate username.

    function validateUserName(username){
        if(username.length>=3){
          var usernameRegex = /^[a-zA-Z ]+$/;
        return usernameRegex.test(username);
        }
        else{
          return false
        }
      }

        if (email)
        {
            const Alreadyuser = await UserModel.find({ email });
            const validemail= validateemail(email);
            const validname= validateUserName(full_name)

            if(validemail==false){
                return res.status(401).send("Invalid email address !");
            }
            else if (validname==false){
                return res.status(401).send("Please enter atleast 3 characters, no symbols or numbers as full name");
            }
            else if (Alreadyuser.length>0){
                return res.status(403).send("User already exists");
            }
            else{
                const user = new UserModel({
                    email,
                    full_name
                })
                user.save()
                res.send("Signup successfull")   
            }
        }
        
})

module.exports = {
    userController
}