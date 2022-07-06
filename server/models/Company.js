import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        img: {
            type: String,
            default: "",
        },
        headquarters: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
    }, { timestamps: true }
);

export default mongoose.model("Company", CompanySchema);
