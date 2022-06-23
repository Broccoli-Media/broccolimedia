import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoute from "./routes/Auth.js";
import userRoute from "./routes/User.js";

const STATUS_500 = 500;
const app = express();
dotenv.config();

//middlewares
var allowedOrigins = ['http://localhost:3000', 'https://broccolimedia.net/']
const corsOptions = {
	origin: function(origin, callback) {
		// allow requests with no origin 
		// (like mobile apps or curl requests)
		if (!origin) return callback(null, true);
		if (allowedOrigins.indexOf(origin) === -1) {
			var msg = 'The CORS policy for this site does not ' +
				'allow access from the specified Origin.';
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	},
	// methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH', 'OPTIONS'],
	// headers: ['Origin', 'Content-Type', 'X-Auth-Token', 'X-Requested-With', 'Accept', 'application/json', 'X-Auth-Token', 'Access-Control-Request-Method', 'Access-Control-Request-Headers'],
	// preflightContinue: false,
	credentials: true,       //access-control-allow-credentials:true
	optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

// Socket
const server = http.createServer(app);
const io = new Server(server);
io.of("/api/socket").on("connection", (socket) => {
	console.log("socket.io: User connected: ", socket.id);
	socket.on("disconnect", () => {
		console.log("socket.io: User disconnected: ", socket.id);
	});
});

mongoose
	.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => { console.log("Fail to connect MongoDB"); });

// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET, UPDATE, PATCH");
// 	res.header("Access-Control-Allow-Origin", "http://localhost:3000, https://broccolimedia.net/");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, Content-Type, Accept");
// 	res.header("Access-Control-Allow-Credentials", true);
// 	next();
// });

// Coping with cors issue
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.get('/test', (req, res) => { res.send('Broccolimedia is serving'); })

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
app.listen(((process.env.PORT || 5000)), () => { console.log(`Listening to ${process.env.PORT || 5000}`); });