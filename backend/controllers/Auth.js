import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { CreateError } from "../utils/error.js";
import jwt from "jsonwebtoken";

const SALT_NUM = 20;
const NO_USER = 404;
const STATUS_200 = 200;
const STATUS_400 = 400;

export const register = async (req, res, next) => {
	try {
		const existingEmail = await User.findOne({ email: req.body.email });
		const existingUser = await User.findOne({ username: req.body.username });
		const existingPhone = await User.findOne({ username: req.body.username });

		if (existingEmail) {
			return res
				.status(STATUS_400)
				.json({ message: "This E-mail is alreay in use" });
		} else if (existingUser) {
			return res
				.status(STATUS_400)
				.json({ message: "This Username is alreay in use" });
		} else if (existingPhone) {
			return res
				.status(STATUS_400)
				.json({ message: "This Phone-Number is alreay in use" });
		} else {
			const salt = bcrypt.genSaltSync(SALT_NUM);
			const hash = bcrypt.hashSync(req.body.password, salt);
			const newUser = new User({
				...req.body,
				password: hash,
			});

			await newUser.save();
			res.status(200).send("User has been created.");
			res.redirect("/api/auth/signin");
		}

	} catch (err) {
		next(err);
	}
};

export const signin = async (req, res, next) => {
	try {
		
		const user = await User.findOne({ username: req.body.username });
		if (!user) return next(CreateError(NO_USER, "User not found!"));

		const isPasswordCorrect = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (!isPasswordCorrect)
			return next(CreateError(STATUS_400, "Wrong password or username!"));

		const token = jwt.sign(
			{ id: user._id, isAdmin: user.isAdmin },
			process.env.JWT
		);

		const { password, isAdmin, ...otherDetails } = user._doc;

		res.cookie("access_token", token, {
			httpOnly: true,
		}).status(STATUS_200).json({ details: { ...otherDetails }, isAdmin });

	} catch (err) {
		next(err);
	}
};
