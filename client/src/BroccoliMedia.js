import React, { useRef, useEffect, useContext } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
// Views 
import Home from './Mainpage/views/Home';
import SignIn from './Mainpage/views/SignIn';
import NotFound from './Mainpage/views/404';
import Dashboard from './Dashboard/Dashboard';
import ScrollReveal from './Mainpage/utils/ScrollReveal';
// Context
import { AuthContext } from "./Mainpage/context/AuthContext.js";
import { DarkModeContext } from "./Mainpage/context/darkModeContext.js";
import "./Dashboard/dark.scss"
// Dashboard components
import Users from './Dashboard/pages/users/Users'
import Single from "./Dashboard/pages/single/Single"
import New from "./Dashboard/pages/new/New"
import { userInputs } from "./Dashboard/formSource";
import { userColumns } from "./Dashboard/datatablesource";
import Update from './Dashboard/pages/update/Update';

const BroccoliMedia = () => {

	const { darkMode } = useContext(DarkModeContext);
	const { user } = useContext(AuthContext);

	var username = "Username"

	const ProtectedRoute = ({ children }) => {
		if (!user) { return <Navigate to="/signin" />; }
		username = user.username;
		return children;
	};

	const childRef = useRef();
	let location = useLocation();

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
							<Route path="signin" element={<SignIn />}
							/>
							{/* For Main Usage */}
							<Route index element={<Home />} />

							Dashboard
							<Route
								path="dashboard"
								element={
									<ProtectedRoute>
										<Dashboard />
									</ProtectedRoute>
								}
							/>

							<Route path="users">
								<Route
									index
									element={
										<ProtectedRoute>
											<Users columns={userColumns} />
										</ProtectedRoute>
									}
								/>
								<Route
									path="new"
									element={
										<ProtectedRoute>
											<New inputs={userInputs} title="Add New User" />
										</ProtectedRoute>
									}
								/>
								<Route path=":id">
									<Route
										path="update"
										element={
											<ProtectedRoute>
												<Update title={username} />
											</ProtectedRoute>
										}
									/>
									<Route
										index
										element={
											<ProtectedRoute>
												<Single />
											</ProtectedRoute>
										}
									/>
								</Route>
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