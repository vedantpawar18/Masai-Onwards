import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';


function PrivateRoute() {


 let token = localStorage.getItem("accessToken")

//  console.log("tooookken",token)

  return (
    token ? <Outlet/>: <Navigate to="/" />
  )
}

export default PrivateRoute


