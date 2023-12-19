import { Schema, model } from "mongoose";

const softwareSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'SoftwareCategory',
        required: true
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'SoftwareType',
        required: true
    }
}, {
    timestamps: true
});

const Software = model('Software', softwareSchema);

export default Software;