const {Router} = require("express")
const {UserModel} = require("../models/User.model")
const userController = Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
require("dotenv").config();

// email, username and mobile number verification for the first page of signup

userController.post("/verify", async(req,res)=>{

  //  <----------------------If user is signed up with email id --------------------------------------------------> //
  const {email, password, full_name,mob_numb} = req.body;

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

  //  <----------------------If user is signed up with email id --------------------------------------------------> //
    if (email && !password)
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
           return res.status(200).send("Otp sent to your email address")   
        }
    }

     //  <----------------------If user is signed up with mobile number--------------------------------------------------> //

     if(mob_numb && !password){

      const alreadyUser = await UserModel.find({ mob_numb});
      const validName= validateUserName(full_name)

      if (alreadyUser.length>0){
        return res.status(403).send("User already exists");
       }
       else if (validName==false){
        return res.status(401).send("Please enter atleast 3 characters, no symbols or numbers as full name");
      }
      else if(mob_numb.length!==10){
        return res.status(401).send("Invalid mobile number!");
      }
     else {
      return res.status(200).send("Otp sent to your mobile number")  
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
         bcrypt.hash(password, 5, async function(err, hash) {
           if(err){
               res.send("Something went wrong, plz try again later")
           }
           const user = new UserModel({
               email,
               password : hash,
               full_name
           })
           try{
               await user.save()
               const token = jwt.sign({ emailId:email , userName:full_name, mobNumb:null}, process.env.JWT_SECRET);
               res.json({msg : "Signup successfull at email password",token})
           }
           catch(err){
               console.log(err)
               res.send("Something went wrong, plz try again")
           }
          
       }); 
       }
   }

//  <----------------------If user is signed up  with full name , mobile number and password--------------------------------------------------> //
   if(password && mob_numb){
    const alreadyUser = await UserModel.find({ mob_numb});

    if (alreadyUser.length>0){
      return res.status(403).send("User already exists");
     }
      
    else if(mob_numb.length!==10){
      return res.status(401).send("Invalid mobile number at end !");
    }
    if (password.length<8){
      return res.status(401).send("password length should not be less than 8");
  }
  else {
      bcrypt.hash(password, 5, async function(err, hash) {
        if(err){
          console.log(err)
            res.send("Something went wrong, plz try again later")
        }
        const user = new UserModel({
            mob_numb,
            password : hash,
            full_name
        })
        try{
            await user.save()
            const token = jwt.sign({ mobile:mob_numb }, process.env.JWT_SECRET);
            res.json({msg : "Signup successfull at mob password",token})
        }
        catch(err){
            console.log(err)
            res.send("Something went wrong, plz try again")
        }
       
    }); 
    }

 }
})

// email, username and mobile number stored to db after otp verification

userController.post("/signup", async(req, res) => {
    const {email, password, full_name,mob_numb} = req.body;

      //  <----------------------If user is signed up with email address--------------------------------------------------> //
  
    if (password.length<8){
        return res.status(401).send("password length should not be less than 8");
    }
    else if(email && !password){
   
      const user = new UserModel({
          email,
          full_name
      })
      await user.save()
      const token = jwt.sign({ emailId:email }, process.env.JWT_SECRET);
      res.json({msg : "Signup successfull",token})
  
  }

         //  <----------------------If user is signed up with mobile number--------------------------------------------------> //

  if (mob_numb && !password){
    
   if(password.length<8){
    return res.status(401).send("password length should not be less than 8");
   }
   else{
    const user = new UserModel({
      email,
      mob_numb
  })
  await user.save()
  const token = jwt.sign({ mobNumb:mob_numb }, process.env.JWT_SECRET);
  res.json({msg : "Signup successfull",token})
   }
  }
         
})

module.exports = {
    userController
}