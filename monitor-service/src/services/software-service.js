import Software from "../models/software-model.js";

/**
 * This function saves software in the db
 * @param {
 *  image: string,
 *  name: string,
 *  software_category: ObjectId,
 *  software_type: ObjectId,
 * }
 */
export const saveNewSoftware = async (software) => {
    try {
        const newSoftware = new Software(software);
        await newSoftware.save();
        return newSoftware;
    } catch (error) {
        console.error(error);
    }
}

export const getSoftwareByName = async (name) => {
    try {
        const software = await Software.findOne({ name });
        if (!software) {
            return null;
        }
        return software;
    } catch (error) {
        console.error(error);
        throw error;
    }
}