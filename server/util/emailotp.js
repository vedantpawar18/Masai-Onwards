const nodemailer = require("nodemailer");
const OTPModel = require("../models/Otp.model");
const jwt = require("jsonwebtoken");


// function to check if email is validate or not.
const emailvalidation = (email) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) return true;
    else return false;
  };
  
  
//   function to send mail using nodemailer

const sendmail=async(email)=>
{
      
  const user = await OTPModel.findOne({ email });
      if (user) await OTPModel.deleteOne({ email: email });

      const mail =await  nodemailer.createTransport({
        service: "gmail",
        secure: false,
        host: "smtp.gmail.com",

        auth: {
          user: process.env.Email,
          pass: process.env.password,
        },
      });

      let otp = Math.floor(100000 + Math.random() * 900000);

     const info =await mail.sendMail({
        from: "Team8masai@gmail.com",
        to: email,
        subject: "Masai School",
        html: `<p>Otp for sign in with masai portal is ${otp}</p>`,
      });
      const newotp = new OTPModel({ email: email, otp: otp });
      console.log(newotp)
      newotp.save();
     
}


  // function for generating token
const generateToken = ({ email = null, full_name = null, mobile = null }) => {
    const Primarytoken = jwt.sign(
      { email: email, name: full_name, mobile: mobile },
      process.env.PRIMARY_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    const Refreshtoken = jwt.sign(
      { email: email, name: full_name, mobile: mobile },
      process.env.REFRESH_SECRET_KEY,
      {
        expiresIn: "7days",
      }
    );
    return {
      message: "Signed in successfully",
      Primarytoken,
      Refreshtoken,
    };
  };

  module.exports={sendmail,generateToken,emailvalidation};