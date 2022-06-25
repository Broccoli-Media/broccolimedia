import cors from "cors";
// import http from "http";
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
const Broccolimedia = express();
dotenv.config();

// Database MongoDB
mongoose
	.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => { console.log("Fail to connect MongoDB"); });

// Socket
// const server = http.createServer(app);
// const io = new Server(server);
// io.of("/api/socket").on("connection", (socket) => {
// 	console.log("socket.io: User connected: ", socket.id);
// 	socket.on("disconnect", () => {
// 		console.log("socket.io: User disconnected: ", socket.id);
// 	});
// });
// Middleware
var corsOptions = {
	'origin': "http://localhost:3000",
	// 'allowedHeaders': "Authorization, Origin, X-Requested-With, Content-Type, Accept, x-content-type-options",
	// 'exposedHeaders': "Authorization, Origin, X-Requested-With, Content-Type, Accept, x-content-type-options",
	'methods': "GET,HEAD,PUT,UPDATE,POST,DELETE, OPTIONS",
	'credential': true,
	'preflightContinue': false,
	'maxage': 31536000, 
	optionsSuccessStatus: 200
}
// Broccolimedia.options('*', cors());
Broccolimedia.use(cors());
Broccolimedia.use(express.json());
Broccolimedia.use(cookieParser());
Broccolimedia.use(bodyParser.json());
// Routes
Broccolimedia.use("/auth", authRoute);
Broccolimedia.use("/user", userRoute);
Broccolimedia.get('/test', testRoute);
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
Broccolimedia.listen(PORT, () => { console.log(`Listening to ${PORT}`); });