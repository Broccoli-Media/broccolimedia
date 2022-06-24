import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
// import { Server } from "socket.io";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
// Routers
import authRoute from "./routes/Auth.js";
import userRoute from "./routes/User.js";
import testRoute from "./routes/Test.js";
// App settings
const PORT = process.env.PORT || 5000
const STATUS_500 = 500;
const app = express();
dotenv.config();
function checkStatus(err, req, res, next) {
	const errorStatus = err.status || STATUS_500;
	const errorMessage = err.message || "Something went wrong!";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
}
// Coping with cors issue
function corsSetting(req, res, next) {
	// https://broccolimedia.net/
	res.header('Access-Control-Allow-Origin', 'https://broccolimedia.net/');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Credentials', true);
	next();
};
// Database MongoDB
mongoose
	.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => { console.log("Fail to connect MongoDB"); });
// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(checkStatus);
// Socket
// const server = http.createServer(app);
// const io = new Server(server);
// io.of("/api/socket").on("connection", (socket) => {
// 	console.log("socket.io: User connected: ", socket.id);
// 	socket.on("disconnect", () => {
// 		console.log("socket.io: User disconnected: ", socket.id);
// 	});
// });
app.options('*', cors());
app.use("/auth", authRoute, corsSetting);
app.use("/user", userRoute, corsSetting);
app.get('/test', testRoute);
// const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Listening to ${PORT}`); });