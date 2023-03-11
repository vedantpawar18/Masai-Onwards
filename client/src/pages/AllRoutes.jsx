import React from "react";
import { Routes, Route } from "react-router-dom";
import ApplyDashboard from "../components/ApplyDashboard";
import DetailPage from "../components/DetailPage";

import LandingPage from "../components/LandingPage";
import LandingSignUp from "../components/LandingSignUp";

import PrivateRoute from "../components/PrivateRoute";
import ScoreDashboard from "../components/ScoreDashboard";
import SideBar from "../components/SideBar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgetPass from "./ForgetPass";
import ResetPass from "./ResetPass";

const AllRoutes = () => {
	return (
		<>
			{/* <Navbar/>
			 */}
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path="/dashboard" element={<SideBar />} />

					<Route path="/dashboard/:id" element={<DetailPage />} />
					<Route path="/score" element={<ScoreDashboard />} />
					<Route path="/applydashboard" element={<ApplyDashboard />} />
				</Route>

				<Route path="/" element={<LandingPage />} />
				<Route path="/landingSignup" element={<LandingSignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/forgotpassword" element={<ForgetPass/>} />
				<Route path="/resetpassword" element={<ResetPass/>} />
			</Routes>
		</>
	);
};

export default AllRoutes;