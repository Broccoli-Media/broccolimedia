import mongoose from "mongoose";
const UcerSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		displayname: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		img: {
			type: String,
		},
		livingcity: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		isCompanyOwner: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);

export default mongoose.model("User", UcerSchema);
