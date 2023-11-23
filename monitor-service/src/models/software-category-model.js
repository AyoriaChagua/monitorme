import { Schema, model } from "mongoose";

const softwareCategorySchema = new Schema({
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

const SoftwareCategory = model('SoftwareCategory', softwareCategorySchema);

export default SoftwareCategory;