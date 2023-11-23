import {
    getSoftwareCategories,
    getLaboratories,
    getSoftwareTypes,
    getScheduleWithCourses,
    getCourses
} from "../services/basic-info-service";

export const getCategoriesController = async (req, res) => {
    try {
        const categories = await getSoftwareCategories();
        if (categories.length === 0) {
            const msg = {
                msg: "Void list, categories not found"
            }
            return res.status(204).json(msg)
        }
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getTypesController = async (req, res) => {
    try {
        const types = await getSoftwareTypes();
        if (types.length === 0) {
            const msg = {
                msg: "Void list, types not found"
            }
            return res.status(204).json(msg)
        }
        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getLaboratoriesController = async (req, res) => {
    try {
        const laboratories = await getLaboratories();
        if (laboratories.length === 0) {
            const msg = {
                msg: "Void list, laboratories not found"
            }
            return res.status(204).json(msg)
        }
        res.status(200).json(laboratories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getCoursesController = async (req, res) => {
    try {
        const courses = await getCourses();
        if (courses.length === 0) {
            const msg = {
                msg: "Void list, courses not found"
            }
            res.status(204).json(msg)
        }
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getScheduleController = async (req, res) => {
    try {
        const schedule = await getScheduleWithCourses();
        if (schedule.length === 0) {
            const msg = {
                msg: "Void list, schedule not found"
            }
            res.status(204).json(msg);
        }
        res.statu(200).json(schedule);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}