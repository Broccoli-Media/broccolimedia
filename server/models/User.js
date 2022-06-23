import mongoose from "mongoose";
const UcerSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		displayName: {
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
		isAdmin: {
			type: Boolean,
			default: false,
		},
		img: {
			type: String,
			default: "",
		},
		livingCity: {
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
		isCompanyOwner: {
			type: Boolean,
			default: false
		},
		onRevenue: {
			type: Boolean,
			default: false,
		},
		workingType: {
			type: Array,
			default: []
		},
		socialMedia: {
			type: [{
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
			default: []
		},
		totalfollowers: {
			type: Number,
			default: 0,
		},
		level: {
			type: Number,
			default: 1,
		},
		collaboratedcompanies: {
			type: [{
				name: {
					type: String,
				},
				times: {
					type: Number,
				},
			}],
			default: [],
		},
		collaboratedcompaniesnumber: {
			type: Number,
			default: 0,
		}
	},
	{ timestamps: true }
);

export default mongoose.model("User", UcerSchema);
