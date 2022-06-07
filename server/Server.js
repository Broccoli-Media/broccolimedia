import cors from "cors";
import path from "path";
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
import companyRoute from "./routes/Company.js";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5000;
const STATUS_500 = 500;
const app = express();
dotenv.config();
//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.json());

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
		await mongoose.connect(process.env.MONGO);
	} catch (error) {
		throw error;
	}
};

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once("open", () => {
	const userChangeStream = connection.collection("users").watch();

	userChangeStream.on("change", (change) => {
		switch (change.operationType) {
			case "create":
				console.log("insertion detected at backend");
				const user = {
					_id: change.fullDocument._id,
					username: change.fullDocument.username,
					displayname: change.fullDocument.displayname,
					email: change.fullDocument.email,
					Admin: change.fullDocument.Admin,
					img: change.fullDocument.img,
					livingcity: change.fullDocument.livingcity,
					phone: change.fullDocument.phone,
					password: change.fullDocument.password,
					isAdmin: change.fullDocument.isAdmin,
					isCompanyOwner: change.fullDocument.isCompanyOwner,
					onRevenue: change.fullDocument.onRevenue,
				}
				io.of("/api/socket").emit("newUser", user);
				break;
			case "update":
				console.log("update detected at backend");
				io.of("/api/socket").emit("updateUser", change.documentKey._id);
				break;
			case "delete":
				console.log("deletion detected at backend")
				io.of("/api/socket").emit("deleteUser", change.documentKey._id);
				break;
		}
	})
})


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

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static(path.resolve(__dirname, "./client/build")))
// 	app.get("*", (req, res) => { res.sendFile(path.resolve(__dirname, './client/build', 'index.html')) })
// }

// app.use(express.static(path.resolve(__dirname, "./client/build")))
// app.get("*", (req, res) => { res.sendFile(path.resolve(__dirname, './client/build', 'index.html')) })

app.get('/', (req, res) => {
	res.send('Broccolimedia is serving');
})

app.listen((PORT), () => {
	connect();
	console.log(`Listening to ${PORT}, MongoDB connected`);
});