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
const app = express();
dotenv.config();
// Middleware
var corsOptions = {
	'origin': "https://broccolimedia.net",
	'allowedHeaders': "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, x-content-type-options",
	'exposedHeaders': "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, x-content-type-options",
	'methods': "GET,HEAD,PUT,UPDATE,POST,DELETE",
	'credential': true,
	'preflightContinue': false,
	'maxage': 31536000
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
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
// Routes
function corsSet (req, res, next){
	res.header("Access-Control-Allow-Origin", "https://broccolimedia.net");
	res.header("Access-Control-Allow-Headers","Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, x-content-type-options");
	res.header("Access-Control-Exposed-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, x-content-type-options");
	res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, UPDATE");
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Max-Age", 31536000);
	next();
}
// app.options('*', cors());
app.use("/auth", authRoute, cors(corsSet));
app.use("/user", userRoute, cors(corsSet));
app.get('/test', testRoute);
app.use((err, req, res, next) => {
	const errorStatus = err.status || STATUS_500;
	const errorMessage = err.message || "Something went wrong!";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});
// const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Listening to ${PORT}`); });