import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


function PrivateRoute() {

//  let flag = false
 let token = localStorage.getItem("accessToken")
  // const token = useSelector((store)=>store.auth.auth);
  //  if(token!==""){
  //   flag = true
  //  }else{
  //   flag = false
  //  }
  //   console.log("flag",flag)
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