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
		dateOfBirth:{
			type: Date,
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
		onRevenue: {
			type: Boolean,
			default: false,
		},
		workingType: [{
			type: String,
		}],
		socialMedia: [{
			name: {
				type: String,
			},
			link: {
				type: String,
			},
			followers: {
				type: Number,
			}
		}],
		totalfollowers: {
			type: Number,
		},
		level: {
			type: Number,
		},
		collaboratedcompanies:[{
			name: {
				type: String,
			},
			times: {
				type: Number,
			},
		}],
		collaboratedcompaniesnumber: {
			type: Number,
		}
	},
	{ timestamps: true }
);

export default mongoose.model("User", UcerSchema);
