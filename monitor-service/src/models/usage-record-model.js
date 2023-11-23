import { Schema, model } from "mongoose";

const usageRecordSchema = new Schema({
    computer: {
        type: Schema.Types.ObjectId,
        ref: 'Computer',
        required: true
    },
    software: {
        type: Schema.Types.ObjectId,
        ref: 'Software',
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const UsageRecord = model('UsageRecord', usageRecordSchema);
export default UsageRecord;