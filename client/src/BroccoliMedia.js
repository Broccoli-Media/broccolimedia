import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
// Views 
import Home from './Mainpage/views/Home';
import SignIn from './Mainpage/views/SignIn';
import NotFound from './Mainpage/views/404';
// Necessary Components
import ScrollReveal from './Mainpage/utils/ScrollReveal';
import { AuthContext } from "./Mainpage/context/AuthContext.js";
import { DarkModeContext } from "./Mainpage/context/darkModeContext.js";
// Profile Components
import Profile from './Profile/Profile';
import ProfileShow from './Profile/ProfileShow';

const BroccoliMedia = () => {

	const childRef = useRef();
	let location = useLocation();
	const { darkMode } = useContext(DarkModeContext);
	const { user, userLoading } = useContext(AuthContext);

	const ProtectedRoute = ({ children }) => {
		if (!user) { return <Navigate to="/signin" />; }
		return children;
	};

	useEffect(() => {
		document.body.classList.add('is-loaded')
		childRef.current.init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<ScrollReveal
				ref={childRef}
				children={() => (
					<Routes>
						<Route path="/">
							<Route path="signin" element={<SignIn />} />

							{/* For Main Usage */}
							<Route index element={<Home />} />

							{/* For Personal Profile */}
							<Route path="profile">
								<Route path={`in/:username`} element={
									<ProtectedRoute>
										<Profile user={user} isLoading={userLoading} />
									</ProtectedRoute>
								} />
								<Route path=":username" element={<ProfileShow />} />
							</Route>

						</Route>
						{/* For Error Page */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				)} />
		</div>

	);
}

export default BroccoliMedia;