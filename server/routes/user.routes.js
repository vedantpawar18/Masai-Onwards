const {Router} = require("express")
const {UserModel} = require("../models/User.model")
const userController = Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const fast2sms = require('fast-two-sms')

userController.post("/signup", async(req, res) => {
    const {email, password, full_name,mob_numb} = req.body;

    //  <----------------------If user is signed up with email id --------------------------------------------------> //

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
            const alreadyUser = await UserModel.find({ email });
            const valideMail= validateemail(email);
            const validName= validateUserName(full_name)

            if(valideMail==false){
                return res.status(401).send("Invalid email address !");
            }
            else if (validName==false){
                return res.status(401).send("Please enter atleast 3 characters, no symbols or numbers as full name");
            }
            else if (alreadyUser.length>0){
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

         //  <----------------------If user is signed up with mobile number--------------------------------------------------> //

        if(mob_numb){

          if(mob_numb.length==10){

            function sendMessage(message,number,res) {
              var options = {
                authorization:
                  "eYnsX3vdSZg9PrQFqIWz8RGVx4NkBAfKhJwu51jt7piL2mDUcEeLCUaKzx90Gl84Mo2Sq1cZ6OwfbdQB",
                message:message,
                numbers: [number],
              };
          
              // send this message
          
              fast2sms
                .sendMessage(options)
                .then((response) => {
                  console.log(response)
                  res.send("SMS OTP Code Sent Successfully")
                })
                .catch((error) => {
                  res.send("Some error taken place")
                });
          }
          const message= "hello"
          sendMessage(message,mob_numb,res)
           
          }
          else {
            return res.status(401).send("Invalid mobile number !");
          }
        }

        //  <----------------------If user is signed up  with full name email or mobile number and password--------------------------------------------------> //

        if(password && email){
           const alreadyUser = await UserModel.find({ email });
            const valideMail= validateemail(email);
            const validName= validateUserName(full_name)

            if(valideMail==false){
                return res.status(401).send("Invalid email address !");
            }
            else if (validName==false){
                return res.status(401).send("Please enter atleast 3 characters, no symbols or numbers as full name");
            }
            else if (alreadyUser.length>0){
                return res.status(403).send("User already exists");
            }
            else if (password.length<8){
                return res.status(401).send("password length should not be less than 8");
            }
            else{
                const user = new UserModel({
                    email,
                    full_name,
                    password
                })
                user.save()
                res.send("Signup successfull")   
            }
        }

        if(password && mob_numb){
         
          if(mob_numb==10){
            const user = new UserModel({
              mob_numb,
              full_name,
              password
          })
          user.save()
          res.send("Signup successfull")  
          } 
          else {
            return res.status(401).send("Invalid mobile number !");
          }
       }
        
})

module.exports = {
    userController
}