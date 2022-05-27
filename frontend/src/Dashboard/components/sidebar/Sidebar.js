import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./sidebar.scss";

// Contexts
import { AuthContext } from "../../../Mainpage/context/AuthContext";
// import { DarkModeContext } from "../../../Mainpage/context/darkModeContext";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
	// const { dispatch } = useContext(DarkModeContext);

	const navigate = useNavigate()
	const { dispatch, user } = useContext(AuthContext);
	const signOut = () => {
		localStorage.clear();
		try {
			dispatch({ type: "SIGNOUT", payload: {} });
			navigate("/")
		} catch (err) {
			dispatch({ type: "SIGNIN_FAILURE", payload: err.response.data });
		}

	}
	return (
		<div className="sidebar">
			<div className="top">
				<Link className="Logo" to="/" ></Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<Link to="/dashboard">
							<DashboardIcon className="icon" />
							<span>Dashboard</span>
						</Link>
					</li>
					<p className="title">USER</p>
					<Link to="/users/:id">
						<li>
							<AccountCircleOutlinedIcon className="icon" />
							<span>Profile</span>
						</li>
					</Link>
					{user.Admin && (
					<Link to="/users/new" style={{ textDecoration: "none" }}>
						<li>
							<PersonOutlineIcon className="icon" />
							<span>Add Users</span>
						</li>
					</Link>)}
					<p className="title">SERVICE</p>
					{/* <li>
						<SettingsApplicationsIcon className="icon" />
						<span>Settings</span>
					</li> */}
					<li  onClick={signOut}>
						<ExitToAppIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
