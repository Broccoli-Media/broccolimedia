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
import { AuthContext } from './Mainpage/context/AuthContext.js';

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
						<Route path="/">
							{/* For Main Usage */}
							<Route index element={<Home />} />
							{/* For Sign In Page */}
							<Route path="signin" element={<SignIn />} />
							{/* For Personal Profile */}
							<Route path="profile">
								<Route path="in/:username" element={
									<ProtectedRoute>
										<Profile />
									</ProtectedRoute>
								} />
								<Route path=":username" element={<ProfileShow />} />
							</Route>
							{/* For Register Page */}
							{/* <Route path="register" >
								<Route path="influencer" element={''}/>
								<Route path="company" element={''} />
								<Route path="visitor" element={''} />
							</Route> */}
						</Route>
						{/* For Error Page */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				)}
			/>
		</div>
	);
}