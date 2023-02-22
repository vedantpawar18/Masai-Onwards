const { Router } = require("express");
const authRouter = Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User.model");
const {sendmail,generateToken,emailvalidation}=require("../util/emailotp");
const OTPModel = require("../models/Otp.model");
const rateLimit = require('express-rate-limit')



const apiLimiter = rateLimit({
	windowMs: 36 * 60 * 1000, //1 hour
	max: 10, // Limit each IP to 10 requests per `window` (here, per 60 minutes)
  message:
		'You exceeded the limit',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


authRouter.use("/signin",apiLimiter);

// APT for sign in
authRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const emailvalidate = emailvalidation(email);
 if (emailvalidate ) {
  const user = await UserModel.findOne({ email });
    if (user && password) {
      const hash = user.password;
      console.log(user);
      if (user && password) {
        const verification = await bcrypt.compare(password, hash);
      if (verification) {
          res.send(generateToken({
            email: user.email,
            full_name: user.full_name,
            mobile: user.mobile,
          }));
        } else if (user && !verification)
          res.status(401).send({ msg: "Please enter a valid password." });
      }
    } else if (user) {
      sendmail(email);
      res
        .status(200)
        .send({msg:"OTP sent successfully, Please check your email for OTP."});
    }
    else
    res.status(401).send({msg:"The account you mentioned does not exist. Please try with correct email address."})
  } else res.status(401).send({ msg: "Please enter a valid email address." });
});


// API to verify otp sent on email
authRouter.post("/verifyotp", async (req, res) => {
  const { email, otp } = req.body;
  const user = await OTPModel.findOne({ email });
  if (user && user.otp == otp) {
    const userdetails = await UserModel.findOne({ email });
    if(userdetails)
    res.send(
      generateToken({
        email: userdetails.email,
        full_name: userdetails.full_name,
        mobile: userdetails.mobile,
      })
      
    );
  } else res.status(401).send({ msg: "Please enter a valid 6 digit OTP." });
});


module.exports = authRouter;
