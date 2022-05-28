import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoute from "./routes/Auth.js";
import userRoute from "./routes/User.js";
import companyRoute from "./routes/Company.js";

const PORT = 5000;
const STATUS_500 = 500;
const app = express();
dotenv.config();
//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.json());

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("MongoDB Gotcha.");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("No MongoDB");
});



app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);

app.use((err, req, res, next) => {
	const errorStatus = err.status || STATUS_500;
	const errorMessage = err.message || "Hey! Something wrong here";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

app.use(express.static("client/build"))
app.get("*", (req, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) })

app.listen(PORT, () => {
	connect();
	console.log(`Listening to ${PORT}, MongoDB connected`);
});