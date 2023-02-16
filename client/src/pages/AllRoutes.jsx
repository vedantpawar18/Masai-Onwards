import React from "react";
import {Routes, Route} from "react-router-dom"
import ForgetPass from "./ForgetPass";

const AllRoutes = () => {
  return(
    <Routes>
     <Route path="/" element={<h1>Homepage</h1>} />
     <Route path="/user/forget" element={<ForgetPass />} />
    </Routes>
  )
};

export default AllRoutes;
