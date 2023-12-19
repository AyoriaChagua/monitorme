import { Schema, model } from "mongoose";

const computerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    laboratory: {
        type: Schema.Types.ObjectId,
        ref: 'Laboratory',
        required: true
    }
});

const Computer = model('Computer', computerSchema);
export default Computer;