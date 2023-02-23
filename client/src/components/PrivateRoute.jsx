import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


function PrivateRoute() {

    // const auth = useSelector((store)=>store.auth.auth);
    // console.log("auth",auth);
let auth = false
  return (
        auth ? <Outlet/>: <Navigate to="/" />
  )
}

export default PrivateRoute