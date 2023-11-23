import { Schema, model } from "mongoose";

const laboratorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    studentCapacity: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

const Laboratory = model('Laboratory', laboratorySchema);
export default Laboratory;