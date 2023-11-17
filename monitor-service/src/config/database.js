import mongoose from 'mongoose';
import { MONGODB_URI } from './env-vars.js';

const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(MONGODB_URI);
    } catch (error) {

    }
}
