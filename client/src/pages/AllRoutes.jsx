import React from "react";
import {Routes, Route} from "react-router-dom"

const AllRoutes = () => {
  return(
    <Routes>
     <Route path="/" element={<h1>Homepage</h1>} />
    </Routes>
  )
};

export default AllRoutes;
