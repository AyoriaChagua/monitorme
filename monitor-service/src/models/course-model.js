import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    career: {
        type: Schema.Types.ObjectId,
        ref: 'Career',
        required: true
    }
});

const Course = model('Course', courseSchema);
export default Course;