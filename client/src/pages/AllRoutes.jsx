import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "../components/DetailPage";

import LandingPage from "../components/LandingPage";
import LandingSignUp from "../components/LandingSignUp";

import PrivateRoute from "../components/PrivateRoute";
import ScoreCard from "../components/ScoreCard";
import ScoreDashboard from "../components/ScoreDashboard";
import SideBar from "../components/SideBar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const AllRoutes = () => {
  return (
    <>

    {/* <Navbar/> */}
    
    {/* <ScoreCard/> */}
    <Routes>

      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<SideBar/>} />

      <Route path="/dashboard/:id" element={<DetailPage/>} />
      <Route path="/score" element={<ScoreDashboard/>} />


      </Route>
      
     <Route path="/" element={<LandingPage/>} />
     <Route path="/landingSignup" element={<LandingSignUp/>}/>
     <Route path="/signin" element={<SignIn/>}/>
     <Route path="/signup" element={<SignUp/>}/>

    </Routes>

    </>
  );
};

export default AllRoutes;
