import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';


function PrivateRoute() {


 let token = localStorage.getItem("accessToken")
 
 

  return (
    token ? <Outlet/>: <Navigate to="/" />
  )
}

export default PrivateRoute


// import React from 'react'
// import { Navigate, useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux/es/exports';

// const PrivateRoute = ({children}) => {
//     const location=useLocation();
//     // let auth;
//     const {auth}=useSelector((store)=>store.auth.auth);
//     console.log("auth",auth)
//     if(!auth)
//     {
//         return <Navigate to="/" state={{from:location}} replace/>
//     }

//   return children
// }

// export default PrivateRoute