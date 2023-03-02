const {Router} = require("express")
const {UserModel} = require("../models/User.model")
const userController = Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const OTPModel = require("../models/Otp.model");
require("dotenv").config();
const {emailvalidation,generateToken, validateUserName, sendmail, decryptToken }= require("../util/emailotp")
const customEmailMessage = "sign in with masai portal.";


// email, username and mobile number verification for the first page of signup

userController.post("/verify", async(req,res)=>{

  //  <----------------------If user is signed up with email id --------------------------------------------------> //
  const {email, password, fullName,mob} = req.body;

  //  <----------------------If user is signed up with email id --------------------------------------------------> //
    if (email && !password)
    {
        const alreadyUser = await UserModel.find({ email });
        const valideMail= emailvalidation(email);
        const validName= validateUserName(fullName)

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
           await sendmail(email, customEmailMessage, fullName)
           return res.status(200).send("Otp sent to your email address")   
        }
    }

     //  <----------------------If user is signed up with mobile number--------------------------------------------------> //

     if(mob && !password){

      const alreadyUser = await UserModel.find({ mob});
      const validName= validateUserName(fullName)

      if (alreadyUser.length>0){
        return res.status(403).send("User already exists");
       }
       else if (validName==false){
        return res.status(401).send("Please enter atleast 3 characters, no symbols or numbers as full name");
      }
      else if(mob.length!==10){
        return res.status(401).send("Invalid mobile number!");
      }
     else {
      return res.status(200).send("Otp sent to your mobile number")  
      }
      
    }

    //  <----------------------If user is signed up  with full name email or mobile number and password--------------------------------------------------> //

    if(password && email){

      const alreadyUser = await UserModel.find({ email });
       const valideMail= emailvalidation(email);
       const validName= validateUserName(fullName)

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
         bcrypt.hash(password, 5, async function(err, hash) {
           if(err){
               res.send("Something went wrong, plz try again later")
           }
           const user = new UserModel({
               email,
               password : hash,
               fullName
           })
           try{
               await user.save()
               const token = generateToken({
                email: user.email,
                fullname: user.fullName,
                mobile: user.mob,
              })
              decryptToken(token.Primarytoken)
               res.status(200).json({msg : "Signup successfull at email password",token, email:email, mobNumb:mob, userName:fullName})
           }
           catch(err){
               console.log(err)
               res.status(400).send("Something went wrong, plz try again")
           }
          
       }); 
       }
   }

//  <----------------------If user is signed up  with full name , mobile number and password--------------------------------------------------> //
   if(password && mob){
    const alreadyUser = await UserModel.find({ mob});

    if (alreadyUser.length>0){
      return res.status(403).send("User already exists");
     }
      
    else if(mob.length!==10){
      return res.status(401).send("Invalid mobile number at end !");
    }
    if (password.length<8){
      return res.status(401).send("password length should not be less than 8");
  }
  else {
      bcrypt.hash(password, 5, async function(err, hash) {
        if(err){
          console.log(err)
            res.status(400).send("Something went wrong, plz try again later")
        }
        const user = new UserModel({
            mob,
            password : hash,
            fullName
        })
        try{
            await user.save()
            const token = generateToken({
              email: user.email,
              fullname: user.fullName,
              mobile: user.mob,
            })
            decryptToken(token.Primarytoken)
            res.status(200).json({msg : "Signup successfull at email password",token, email:email, mobNumb:mob, userName:fullName})
        }
        catch(err){
            console.log(err)
            res.status(400).send("Something went wrong, plz try again")
        }
       
    }); 
    }

 }
})

// email, username and mobile number stored to db after otp verification

userController.post("/signup", async(req, res) => {
    const {email, password, fullName, mob, otp} = req.body;

      //  <----------------------If user is signed up with email address--------------------------------------------------> //
  
    if(email && !password){
      const userExists = await OTPModel.findOne({ email });

      if(userExists && userExists.otp==otp){
        
        const user = new UserModel({
          email,
          fullName
      })
      await user.save();
      const token= generateToken({
        email: user.email,
        fullname: user.fullName,
        mobile: user.mob,
      })
      res.status(200).json({msg : "Signup successfull ",token, email:email, mobNumb:mob, userName:fullName})
      } else res.status(401).send({ msg: "Please enter a valid 6 digit OTP." });
     
  
  }

         //  <----------------------If user is signed up with mobile number--------------------------------------------------> //

  if (mob && !password){
    
   {
    const user = new UserModel({
      fullName,
      mob
  })
  await user.save()

  const token = generateToken({
    email: user.email,
    fullname: user.fullName,
    mobile: user.mob,
  });
  res.status(200).json({msg : "Signup successfull ",token, email:email, mobNumb:mob, userName:fullName})
   }
  }
         
})



module.exports = {
    userController
}