import { Schema, model } from "mongoose";

const careerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    carrerCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
})

const Career = model('Career', careerSchema);
export default Career;