import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import createCourses from './initial-setup/create-courses.js';
import createSchedule from './initial-setup/create-schedule.js';
import createTypes from './initial-setup/create-types.js';
import createCategories from './initial-setup/create-categories.js';
import createLaboratories from './initial-setup/create-laboratories.js';
import createCareers from './initial-setup/create-carrers.js';
import createComputers from './initial-setup/create-computers.js'

import softwareRouter from './routes/software-routes.js';
import computerRouter from './routes/computer-routes.js';
import usageRecorRouter from './routes/usage-record-routes.js';


const app = express();

//set db
createLaboratories().then(createComputers);
createCareers();
createCategories();
createTypes();
createCourses().then(createSchedule);



//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/monitor/softwares", softwareRouter);
app.use("/api/monitor/computers", computerRouter);
app.use("/api/monitor/usage-record", usageRecorRouter);

export default app;

