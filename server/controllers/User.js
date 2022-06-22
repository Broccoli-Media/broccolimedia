import User from "../models/User.js";
import bcrypt from "bcryptjs";

const SALT_NUM = 20;

export const updateUser = async (req, res, next) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (!user) return next(CreateError(NO_USER, "User not found!"));

		const isPasswordCorrect = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (!isPasswordCorrect)
			return next(CreateError(STATUS_400, "Wrong password or username!"));

		const salt = bcrypt.genSaltSync(SALT_NUM);
		const hash = bcrypt.hashSync(req.body.password, salt);

		await newUser.save();

		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: {
				...req.body,
				password: hash,
			}},
			{ new: true }
		);
		res.status(200).json(updatedUser);
		res.redirect("/api/user/:id");
	} catch (err) {
		next(err);
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User has been deleted.");
	} catch (err) {
		next(err);
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params._id);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};

export const getUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};
