import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
// Views 
import Home from './Mainpage/views/Home.js';
// import NotFound from './Mainpage/views/404.js';
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

						{/* For Main Usage */}
						<Route exact path="/" element={<Home />} />
						{/* For About Page */}
						<Route exact path="/about" element={<About />} />
						{/* For Sign In Page */}
						<Route exact path="/signin" element={<SignIn />} />
						{/* For Register Page */}
						<Route exact path="/signup" element={<SignUp />} />
						{/* For Personal Profile */}
						<Route exact path="/profile/in/:username" element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						} />
						{/* For Sharing Profile */}
						<Route exact path="/profile/:username" element={<ProfileShow />} />
						{/* influencer register */}
						<Route exact path="/signup/inf" element={<SignupInf />} />
						{/* company owner register */}
						<Route exact path="/signup/com" element={<SignupCom />} />
						{/* For Error Page */}
						{/* <Route path="*" element={<NotFound />} /> */}

					</Routes>
				)}
			/>
		</div>
	);
}