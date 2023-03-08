const nodemailer = require("nodemailer");
const otpModel = require("../models/Otp.model");
const jwt = require("jsonwebtoken");

// function to check if email is validate or not.
const validateEmail = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) return true;
  else return false;
};

//   function to send mail using nodemailer

const sendMailOtp = async (email, customEmailMessage, userName) => {
  const user = await otpModel.findOne({ email });
  if (user) await otpModel.deleteOne({ email: email });

  const mail = await nodemailer.createTransport({
    service: "gmail",
    secure: false,
    host: "smtp.gmail.com",

    auth: {
      user: process.env.Email,
      pass: process.env.password,
    },
  });

  let otp = Math.floor(100000 + Math.random() * 900000);

  const info = await mail.sendMail({
    from: "Team8masai@gmail.com",
    to: email,
    subject: "Masai School",
    html: `<h1>Hi ${userName},</h1>
              <p>Greetings from Masai School</p>
              <p>We got a request to ${customEmailMessage} </p>  
              <p>Here is the OTP ${otp}</p>      
              <p>Thank You😊.</p>
              <p>Team Masai</p>                
        `,
  });
  const newOtp = new otpModel({ email: email, otp: otp });
  newOtp.save();
};

// function for generating token
const generateToken = ({ email = null, fullName = null, mobile = null }) => { 
  const primaryToken = jwt.sign(
    { email: email, name: fullName, mobile: mobile },
    process.env.PRIMARY_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
  const refreshToken = jwt.sign(
    { email: email, name: fullName, mobile: mobile },
    process.env.REFRESH_SECRET_KEY,
    {
      expiresIn: "7days",
    }
  );
  return {
    message: "Signed in successfully",
    fullName,
    email,
    primaryToken,
    refreshToken,
  };
};

// function for validating user name
function validateUserName(username){
  if(username.length>=3){
    var usernameRegex = /^[a-zA-Z ]+$/;
  return usernameRegex.test(username);
  }
  else{
    return false
  }
}

// function for decrypting token
const decryptToken =(token) =>{
  const tokenDecodablePart = token.split('.')[1];
  const decoded = JSON.parse(Buffer.from(tokenDecodablePart, 'base64').toString());
  return(decoded)
}

module.exports = { sendMailOtp, generateToken, validateEmail,validateUserName,decryptToken};
