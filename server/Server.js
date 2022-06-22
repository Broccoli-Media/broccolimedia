import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { MONGODB as db } from "./utils/Confit.js";
import authRoute from "./routes/Auth.js";
import userRoute from "./routes/User.js";

const PORT = process.env.PORT || 5000;
const STATUS_500 = 500;
const app = express();
dotenv.config();

const corsOptions = {
	origin: ['https://broccolimedia.net/', 'http://localhost:3000'],
	methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH', 'OPTIONS'],
	headers: ['Origin', 'Content-Type', 'X-Auth-Token', 'X-Requested-With', 'Accept', 'application/json', 'X-Auth-Token'],
	preflightContinue: false,
	origin: true,
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus: 200
};
//middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET, UPDATE, PATCH");
	res.header("Access-Control-Allow-Origin", "http://localhost:3000, https://broccolimedia.net/");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, application/json");
	res.header("Access-Control-Allow-Credentials", true);
	next();
});

const server = http.createServer(app);
const io = new Server(server);

io.of("/api/socket").on("connection", (socket) => {
	console.log("socket.io: User connected: ", socket.id);
	socket.on("disconnect", () => {
		console.log("socket.io: User disconnected: ", socket.id);
	});
});

const connect = async () => {
	try {
		await mongoose.connect(db);
	} catch (error) {
		throw error;
	}
};

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Start running mongoose..."))
	.catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => {
	console.log("Fail to connect Mongoose");
});

// Coping with cors issue
app.use("/auth", authRoute);
app.use("/user", userRoute);

app.get('/test', (req, res) => {
	res.send('Broccolimedia is serving');
})

app.listen((PORT), () => {
	connect();
	console.log(`Listening to ${PORT}, MongoDB connected`);
});