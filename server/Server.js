import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
// Routers
import authRoute from "./routes/Auth.js";
import userRoute from "./routes/User.js";

// App settings
const STATUS_500 = 500;
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
var origins = ['http://localhost:3000', 'https://broccolimedia.net/']
var corsOptionsDelegate = function (req, callback) {
	var corsOptions;
	if (origins.indexOf(req.header('Origin')) !== -1) {
		corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
	} else {
		corsOptions = { origin: false } // disable CORS for this request
	}
	callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(cors());


// Socket
const server = http.createServer(app);
const io = new Server(server);
io.of("/api/socket").on("connection", (socket) => {
	console.log("socket.io: User connected: ", socket.id);
	socket.on("disconnect", () => {
		console.log("socket.io: User disconnected: ", socket.id);
	});
});

// Database MongoDB
mongoose
	.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

mongoose.connection.on("disconnected", () => { console.log("Fail to connect MongoDB"); });

// Coping with cors issue
// app.options('*', cors(corsOptionsDelegate)); // need to use before other routes
app.use("/auth", authRoute, cors(corsOptionsDelegate));
app.use("/user", userRoute, cors(corsOptionsDelegate));
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