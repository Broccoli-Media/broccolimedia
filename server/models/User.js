import mongoose from "mongoose";
const UcerSchema = new mongoose.Schema(
	{   
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
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
		Admin: {
			type: Boolean,
			default: false,
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
			unique: true,
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
		},
		onRevenue:{
			type: Boolean,
			default: false,
		}
		// workingtype: {
		// 	type: String,
		// },
		// socialmediatype: {
		// 	type: String,
		// 	required: true,
		// },
		// socialmedialink: {
		// 	type: String,
		// 	required: true
		// }
	},
	{ timestamps: true }
);

export default mongoose.model("User", UcerSchema);
