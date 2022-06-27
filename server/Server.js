import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
// Routers
import authRoute from "./routes/Auth.js";
import userRoute from "./routes/User.js";
import testRoute from "./routes/Test.js";
// App settings
const PORT = process.env.PORT || 5000
const STATUS_500 = 500;
const Broccolimedia = express();
dotenv.config();

// Database MongoDB
const connect = async () => {
	try {
		mongoose.connect(process.env.MONGO);
		console.log("Connected to mongoDB.");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnected", () => { console.log("Fail to connect MongoDB"); });

// Middleware
Broccolimedia.use(cors());
Broccolimedia.use(cookieParser());
Broccolimedia.use(express.json());

Broccolimedia.use("/api/auth", authRoute);
Broccolimedia.use("/api/user", userRoute);
Broccolimedia.get('/api/test', testRoute);

Broccolimedia.use((err, req, res, next) => {
	const errorStatus = err.status || STATUS_500;
	const errorMessage = err.message || "Something went wrong!";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

// Broccolimedia's port
Broccolimedia.listen(PORT, () => { 
	connect();
	console.log(`Listening to ${PORT}`); 
});