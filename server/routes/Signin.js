const { Router } = require("express");
const authRouter = Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const {UserModel} = require("../models/User.model");
const jwt = require("jsonwebtoken");
const OTPModel = require("../models/otp");

// post request for sign in
authRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const emailvalidate = emailvalidation(email);
    const user = await UserModel.findOne({ email });
    const hash = user.password;
    console.log(user);
    if (user && password) {
      const verification = await bcrypt.compare(password, hash);

      console.log(emailvalidate,verification)
      if (emailvalidate && verification) {
        console.log("email",generateToken(user))
        res.send(generateToken(user));
      } else if (user && !verification)
        res.status(401).send({ msg: "Incorrect credentials" });
      else res.status(401).send({ msg: "Please enter valid email address" });
    }
  } else if (email) {
    const mail = await nodemailer.createTransport({
      service: "gmail",
      secure: false,
      host: "smtp.gmail.com",
  
      auth: {
        user:process.env.Email,
        pass: process.env.password,
        
      },
    });
  
    let otp = Math.floor(100000 + Math.random() * 900000);
  
    console.log(otp);
    const info = await mail.sendMail({
      from: "Team8masai@gmail.com",
      to: email,
      subject: "Masai School",
      html: `<h1>Otp for sign in with masai portal is ${otp}</h1>`,
    });
    const newotp = new OTPModel({ email: email, otp: otp });
    await newotp.save();
  
    res.status(200).send({ msg: "OTP sent successfully, Please check your email for OTP." });
  }
  // else if (mobile) {
  //     if (mobile.length == 10 && mobile[0]!=0)
  //       res.status(200).send({ msg: "Signed in successfully" });
  //     else res.status(401).send({ msg: "Please enter 10 digit valid mobile number" });
  //   }
});

// function for email validation
const emailvalidation = (email) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) return true;
  else return false;
};



// To verify otp
authRouter.post("/verifyotp", async (req, res) => {
  const { email, otp } = req.body;
  console.log(email, otp);
  const user = await OTPModel.findOne({ email });
  console.log(user, otp);
  if (user.otp == otp) {
    res.send({ msg: "Signed in successfully" });
  } else res.status(401).send({ msg: "Invalid OTP" });
});

// function for generating token
const generateToken = (user) => {
   console.log(user);
  const Primarytoken = jwt.sign({ email: user.email, name:user.full_name }, "SECRET1234", {
    expiresIn: "1h",
  });
  const Refreshtoken = jwt.sign({ email: user.email, name:user.full_name }, "SECRETREFRESH1234", {
    expiresIn: "7days",
  });
  return {
    message: "Signed in successfully",
    Primarytoken,
    Refreshtoken,
  };
};

module.exports = authRouter;
