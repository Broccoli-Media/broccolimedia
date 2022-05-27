import React, { useContext } from "react";
import { DarkModeContext } from "../../../Mainpage/context/darkModeContext";
import { AuthContext } from "../../../Mainpage/context/AuthContext";

// Icons
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./navbar.scss";

const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext);
	const { user } = useContext(AuthContext);


	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchOutlinedIcon />
				</div>
				<div className="items">
					<div className="item">
						<DarkModeOutlinedIcon
							className="icon"
							onClick={() => dispatch({ type: "TOGGLE" })}
						/>
					</div>
					<div className="item">
						<img
							src={user.img}
							alt=""
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
