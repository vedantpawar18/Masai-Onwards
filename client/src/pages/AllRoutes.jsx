import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import LandingSignUp from "../components/LandingSignUp";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const AllRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingSignup" element={<LandingSignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
