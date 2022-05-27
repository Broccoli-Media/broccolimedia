import React, { useContext } from "react";

import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
import { AuthContext } from "../../../Mainpage/context/AuthContext";
import Button from "../../../Mainpage/components/elements/Button"
import { Link } from "react-router-dom";

const Single = () => {

	const { user } = useContext(AuthContext);

	return (
		<div className="single">
			<Sidebar />
			<div className="singleContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<Link to="/users/:id/update">
						<Button className="button">Edit</Button>
						</Link>
							
						<div className="item">
							{user.img && (<img
								src={user.img}
								alt=""
								className="itemImg"
							/>)}
							
							<div className="details">
								<h1 className="itemTitle">{user.username}</h1>
								<div className="detailItem">
									<span className="itemKey">Display Name:</span>
									<span className="itemValue">{user.displayname}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">{user.email}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">{user.phone}</span>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="right">
						<Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Single;
