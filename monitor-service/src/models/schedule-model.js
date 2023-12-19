import { Schema, model } from "mongoose";

const scheduleSchema = new Schema({
    day: {
        type: String,
        required: true
    },
    laboratory: {
        type: Schema.Types.ObjectId,
        ref: 'Laboratory',
        required: true
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const Schedule = model('Schedule', scheduleSchema);
export default Schedule;