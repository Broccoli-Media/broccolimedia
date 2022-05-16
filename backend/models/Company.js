import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	companyemail: {
		type: String,
		required: true,
		unique: true,
	},
	address: {
		type: String,
		required: true,
	},
	photos: {
		type: [String],
	},
	desc: {
		type: String,
		required: true,
	},
	hiring: {
		type: Boolean,
		required: true,
	},
	featured: {
		type: Boolean,
		default: false,
	},
	// hiringnum: {
	// 	type: Number,
	// 	required: true,
	// }
});

export default mongoose.model("Company", CompanySchema);
