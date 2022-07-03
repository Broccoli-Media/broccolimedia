import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
// Basic Pages
import Home from './Mainpage/views/Home.js';
import About from './Mainpage/views/about/About.js';
// Sign Up / Sign In Page
import SignIn from './Mainpage/views/SignIn.js';
import SignUp from './Mainpage/views/signup/SignUp.js';
import SignupInf from './Mainpage/views/signup/SignupInf.js';
import SignupCom from './Mainpage/views/signup/SignupCom.js';
// Necessary Components
import ScrollReveal from './Mainpage/utils/ScrollReveal.js';
import { AuthContext } from './Mainpage/context/AuthContext.js';
// Profile Components
import Profile from './Profile/Profile.js';
import ProfileShow from './Profile/ProfileShow.js';

export default function BroccoliMedia() {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		document.body.classList.add('is-loaded')
		childRef.current.init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	const ProtectedRoute = ({ children }) => {
		const { user } = useContext(AuthContext);
		if (!user) { return <Navigate to="/signin" />; }
		return children;
	};

	return (
		<div className="app">
			<ScrollReveal
				ref={childRef}
				children={() => (
					<Routes>
						{/* For Main Usage */}
						<Route exact path="/" element={<Home />} />
						{/* For About Page */}
						<Route exact path="/about" element={<About />} />
						{/* For Sign In Page */}
						<Route exact path="/signin" element={<SignIn />} />
						{/* For Register Page */}
						<Route exact path="/signup" element={<SignUp />} />
						{/* For Personal Profile */}
						<Route path="/profile/in/:username" element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						} />
						<Route path="/profile/testing" element={<Profile />} />
						{/* For Sharing Profile */}
						<Route exact path="/profile/:username" element={<ProfileShow />} />
						{/* influencer register */}
						<Route exact path="/signup/inf" element={<SignupInf />} />
						{/* company owner register */}
						<Route exact path="/signup/com" element={<SignupCom />} />
					</Routes>
				)}
			/>
		</div>
	);
}


// old version routes
// <Route path="/">
// 	{/* For Main Usage */}
// 	<Route index element={<Home />} />
// 	{/* For Sign In Page */}
// 	<Route path="signin" element={<SignIn />} />
// 	{/* For Sign Up Page */}
// 	<Route path="signup" element={<SignUp />} >
// 		{/* influencer register */}
// 		<Route path="inf" element={<SignupInf />} />
// 		{/* company owner register */}
// 		<Route path="com" element={<SignupCom />} />
// 	</Route>
// 	{/* For About Page */}
// 	<Route path="about" element={<About />} />

// 	{/* For Personal Profile */}
// 	<Route path="profile">
// 		<Route path={`in/:username`} element={
// 			<ProtectedRoute>
// 				<Profile />
// 			</ProtectedRoute>
// 		} />
// 		<Route path=":username" element={<ProfileShow />} />
// 	</Route>
// </Route> 