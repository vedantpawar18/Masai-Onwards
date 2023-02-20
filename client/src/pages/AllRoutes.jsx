import React from "react";
import {Routes, Route} from "react-router-dom"

import LandingPage from "../components/LandingPage";
import LandingSignUp from "../components/LandingSignUp";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import ForgetPass from "./ForgetPass";
import ResetPass from './ResetPass';


const AllRoutes = () => {
  return(
    <>
    <Navbar/>
    <Routes>

     <Route path="/" element={<LandingPage/>} />
     <Route path="/landingSignup" element={<LandingSignUp/>}/>
     <Route path="/signin" element={<SignIn/>}/>
     <Route path="/signup" element={<SignUp/>}/>


     <Route path="/user/forget" element={<ForgetPass />} />
     <Route path="/user/reset" element={<ResetPass />} />

    </Routes>
    </>
  )
};

export default AllRoutes;
