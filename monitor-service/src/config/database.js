import mongoose from 'mongoose';
import { MONGODB_URI } from './env-vars.js';

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(MONGODB_URI, connectionParams)
    .then(db => console.log(`Database is connected to ${db.connection.name} 🕹️`))
    .catch(error => console.log(error))