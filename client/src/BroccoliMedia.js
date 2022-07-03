import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
// Views 
import Home from './Mainpage/views/Home.js';
import NotFound from './Mainpage/views/404.js';
import SignIn from './Mainpage/views/SignIn.js';
// Necessary Components
import ScrollReveal from './Mainpage/utils/ScrollReveal.js';
// Profile Components
import Profile from './Profile/Profile.js';
import ProfileShow from './Profile/ProfileShow.js';
import SignUp from './Mainpage/views/signup/SignUp.js';
import SignupInf from './Mainpage/views/signup/SignupInf.js';
import SignupCom from './Mainpage/views/signup/SignupCom.js';
import { AuthContext } from './Mainpage/context/AuthContext.js';
import About from './Mainpage/views/about/About.js';


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
		if (!user) {
			return <Navigate to="/signin" />;
		}
		return children;
	};

	return (
		<div className="app">
			<ScrollReveal
				ref={childRef}
				children={() => (
					<Routes>
						{/* For Sharing Profile */}
						<Route exact path="/profile/:username" element={<ProfileShow />} />
						<Route path="/">

							{/* For Main Usage */}
							<Route index element={<Home />} />
							{/* For Sign In Page */}
							<Route path="signin" element={<SignIn />} />
							{/* For Personal Profile */}
							<Route path="profile">
								{/* <Route index element={<UserProfiles />} /> */}
								<Route path="in/:username" element={
									<ProtectedRoute>
										<Profile />
									</ProtectedRoute>
								} />
								{/* <Route path=":username" element={<ProfileShow />} /> */}
							</Route>
							{/* For Register Page */}
							<Route path="signup" >
								<Route index element={<SignUp />} />
								{/* influencer register */}
								<Route path="inf" element={<SignupInf />} />
								{/* company owner register */}
								<Route path="com" element={<SignupCom />} />
							</Route>
							{/* For About Page */}
							<Route path="about" element={<About />} />
						</Route>
						{/* For Error Page */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				)}
			/>
		</div>
	);
}