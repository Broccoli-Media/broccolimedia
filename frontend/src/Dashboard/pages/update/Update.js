import "./Update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { AuthContext } from "../../../Mainpage/context/AuthContext";
import { useState, useContext } from "react";
import axios from "axios";

const Update = ({ title }) => {
	const { user } = useContext(AuthContext);

	const [file, setFile] = useState("");
	const [info, setInfo] = useState({});

	const handleChange = (e) => {
		setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", "upload");
		try {
			const uploadRes = await axios.put(
				"https://api.cloudinary.com/v1_1/broccoli-media/image/upload",
				data
			);

			const { url } = uploadRes.data;

			const userInfo = {
				...info,
				img: url,
			};
			console.log(userInfo)
			await axios.put('/user/:id', userInfo);
		} catch (err) {
			console.log(err);
		}
	};

	const update = [
		{
			id: "displayname",
			label: "DisplayName",
			type: "text",
			placeholder: user.displayname,
		},
		{
			id: "email",
			label: "Email",
			type: "email",
			placeholder: user.email,
		},
		{
			id: "phone",
			label: "Phone",
			type: "text",
			placeholder: user.phone,
		},
		{
			id: "livingcity",
			label: "The city you are living",
			type: "text",
			placeholder: user.livingcity,
		}
	];

	const verify = [
		{
			id: "username",
			label: "Username",
			type: "text",
			placeholder: "Enter your sign in username",
		},
		{
			id: "password",
			label: "Password",
			type: "password",
			placeholder: "Enter new password",
		}
	];

	return (
		<div className="new">
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						{!user.img && (
							<img
								src={
									file
										? URL.createObjectURL(file)
										: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
								}
								alt=""
							/>)}
						{user.img && (
							<img
								src={
									file
										? URL.createObjectURL(file)
										: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
								}
								alt=""
							/>
						)}
					</div>
					<div className="right">
						<form>
							<div className="formInput">
								<label htmlFor="file">
									Image: <DriveFolderUploadOutlinedIcon className="icon" />
								</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
									style={{ display: "none" }}
								/>
							</div>

							{update.map((input) => (
								<div className="formInput" key={input.id}>
									<label>{input.label}</label>
									<input
										onChange={handleChange}
										type={input.type}
										placeholder={input.placeholder}
										id={input.id}
									/>
								</div>
							))}			
						</form>
						<br />
						<br />
						<br />
						<form>
							{verify.map((input) => (
								<div className="formInput" key={input.id}>
									<label>{input.label}</label>
									<input
										onChange={handleChange}
										type={input.type}
										placeholder={input.placeholder}
										id={input.id}
									/>
								</div>
							))}
							<button onClick={handleClick}>Update</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Update;
