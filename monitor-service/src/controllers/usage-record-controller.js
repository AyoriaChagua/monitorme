import { getComputerByName } from "../services/computers-service.js";
import { getSoftwareByName } from "../services/software-service.js";
import { saveUsageRecord } from "../services/usage-record-service.js";
import * as SoftwareService from "../services/software-service.js";
import *  as BasicInfoService from '../services/basic-info-service.js';
import { defineSoftwareCategory } from "../utils/ai-assistant.js";

export const postUsageRecord = async (req, res) => {
    try {
        const { name, duration, computer, type } = req.body;
        const computerBody = await getComputerByName(computer);
        const softwareBody = await getSoftwareByName(name);
        if (!computerBody) {
            return res.status(404).json({ error: 'Computer not found' });
        } else if (!softwareBody) {
            console.log('creando')
            const { category_id, type_id } = await asignCategoryAndType(name, type);
            const newSoftware = await SoftwareService.saveNewSoftware({
                name,
                category: category_id,
                type: type_id
            });
            const newUsageRecord = await saveUsageRecord({
                computer: computerBody._id,
                software: newSoftware._id,
                duration
            })
            console.log('creado papi cheka tu mongo atlas 😊')
            return res.status(201).json(newUsageRecord);
        }

        const newUsageRecord = await saveUsageRecord({
            computer: computerBody._id,
            software: softwareBody._id,
            duration
        });
        return res.status(201).json(newUsageRecord);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const asignCategoryAndType = async (app, type) => {
    try {
        const softwareCategories = await BasicInfoService.getSoftwareCategories();
        const categoryNames = softwareCategories.map(scategory => scategory.name).join(', ');
        const category = await defineSoftwareCategory(app, categoryNames);
        if (!category) return 'Generic';

        const softwareType = await BasicInfoService.getSoftwareTypeByName(type);
        const softwareCategory = await BasicInfoService.getSoftwareCategoryByName(category);

        return {
            category_id: softwareCategory._id,
            type_id: softwareType._id
        }

    } catch (error) {
        console.log(error);
        return null
    }
}