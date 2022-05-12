import Company from "../models/Company.js";

const STATUS_200 = 200;

export const createCompany = async (req, res, next) => {

	try {
		const existingEmail = await User.findOne({ email: req.body.companyemail });
		const existingUser = await User.findOne({ username: req.body.name });

		if (existingEmail) {
			return res
				.status(STATUS_400)
				.json({ message: "This E-mail has been registered" });
		} else if (existingUser) {
			return res
				.status(STATUS_400)
				.json({ message: "This Company has been registered" });
		}

		const newCompany = new Company(req.body);
		const savedCompany = await newCompany.save();
		res.status(STATUS_200).json(savedCompany);

	} catch (err) {
		next(err);
	}
};

export const updateCompany = async (req, res, next) => {
	try {
		const existingEmail = await User.findOne({ email: req.body.companyemail });
		if (existingEmail) {
			return res
				.status(STATUS_400)
				.json({ message: "This E-mail has been registered" });
		} else {
			const updatedCompany = await Company.findByIdAndUpdate(
				req.params.companyid,
				{ $set: req.body },
				{ new: true }
			);
			res.status(STATUS_200).json(updatedCompany);
		}

	} catch (err) {
		next(err);
	}
};

export const deleteCompany = async (req, res, next) => {
	try {
		await Company.findByIdAndDelete(req.params.companyid);
		res.status(STATUS_200).json("Company has been deleted.");

	} catch (err) {
		next(err);
	}
};

export const getCompany = async (req, res, next) => {
	try {
		const company = await Company.findById(req.params.companyid);
		res.status(STATUS_200).json(company);

	} catch (err) {
		next(err);
	}
};

export const getCompanies = async (req, res, next) => {
	try {
		const companies = await Company.find();
		res.status(STATUS_200).json(companies);

	} catch (err) {
		next(err);
	}
};

export const countByCity = async (req, res, next) => {
	const cities = req.query.cities.split(",");
	try {
		const list = await Promise.all(
			cities.map((city) => {
				return Company.countDocuments({ city: city });
			})
		);
		res.status(STATUS_200).json(list);

	} catch (err) {
		next(err);
	}
};
