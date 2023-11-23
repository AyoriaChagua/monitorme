import { Schema, model } from "mongoose";

const softwareTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const SoftwareType = model('SoftwareType', softwareTypeSchema);

export default SoftwareType;
