import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { CreateError } from "../utils/Error.js";

const STATUS_200 = 200;
const STATUS_400 = 400;
const STATUS_404 = 404;

export const register = async (req, res, next) => {
	try {
		// const existingEmail = await User.findOne({ email: req.body.email });
		// const existingPhone = await User.findOne({ phone: req.body.phone });
		// const existingUser = await User.findOne({ username: req.body.username });
		if (await User.findOne({ email: req.body.email })) {
			return next(CreateError(STATUS_400, "This E-mail is alreay in use"));
		} else if (await User.findOne({ phone: req.body.phone })) {
			return next(CreateError(STATUS_400, "This Phone-Number is alreay in use"));
		} else if (await User.findOne({ username: req.body.username })) {
			return next(CreateError(STATUS_400, "This Username is alreay in use"));
		}
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);
		const newUser = new User({
			...req.body,
			password: hash,
		});
		await newUser.save();
		return res.status(STATUS_200).send("User has been created.");
	} catch (err) { next(err); }
};

export const signin = async (req, res, next) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) return next(CreateError(STATUS_404, "User not found!"));

		const correctPasspord = await bcrypt.compare(req.body.password, user.password);
		if (!correctPasspord)
			return next(CreateError(STATUS_400, "Wrong password or username!"));

		const token = jwt.sign(
			{ id: user._id, isAdmin: user.isAdmin },
			process.env.ACCESS_TOKEN
		);
		const { password, isAdmin, ...otherDetails } = user._doc;

		res
			.cookie("access_token", token, {
				expires: new Date(Date.now() + 112500),
				httpOnly: true,
			})
			.status(STATUS_200)
			.json({ details: { ...otherDetails }, isAdmin })
	} catch (err) { next(err); }
};