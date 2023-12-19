import "../config/database.js"
import Career from "../models/career-model.js";
import SoftwareCategory from "../models/software-category-model.js"
import SoftwareType from "../models/software-type-model.js";
import Laboratory from "../models/laboratory-model.js";
import Course from "../models/course-model.js";
import Schedule from '../models/schedule-model.js';

export const getSoftwareCategories = async () => {
    try {
        const categories = await SoftwareCategory.find();
        return categories
    } catch (error) {
        console.error(error);
    }
}

export const getSoftwareCategoryByName = async (name) => {
    try {
        const categories = await SoftwareCategory.findOne({ name });
        if (!categories) return null;
        return categories
    } catch (error) {
        console.error(error);
    }
}

export const getSoftwareTypes = async () => {
    try {
        const types = await SoftwareType.find();
        return types
    } catch (error) {
        console.error(error);
    }
}

export const getSoftwareTypeByName = async (name) => {
    try {
        const types = await SoftwareType.findOne({ name });
        if (!types) return null;
        return types
    } catch (error) {
        console.error(error);
    }
}

export const getLaboratories = async () => {
    try {
        const laboratories = await Laboratory.find();
        return laboratories
    } catch (error) {
        console.error(error);
    }
}

export const getCourses = async () => {
    try {
        const courses = await Course.find();
        return courses;
    } catch (error) {
        console.error(error);
    }
}


export const getScheduleWithCourses = async () => {
    try {
        const schedules = await Schedule.find().populate({
            path: 'courses',
            populate: [
                { path: 'career' }
            ],
        });
        return schedules;
    } catch (error) {
        console.error('Error at get chedule with courses and laboratories:', error);
        throw error;
    }
};
