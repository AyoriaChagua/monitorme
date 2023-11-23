import Laboratory from "../models/laboratory-model.js";
import Computer from "../models/computer-model.js";

/**
 * This function return a computer list 
 * @returns {
 *  [
 *      name: string
 *      laboratory: {
 *          name: string
 *          studentCapacity: number
 *      }
 *  ]
 * }
*/
export const getAllComputers = async () => {
    try {
        const computers = await Computer.find().populate('laboratory');

        if (!computers || computers.length === 0) {
            return [];
        }
        return computers;
    } catch (error) {
        console.error('Error al obtener todas las computadoras:', error);
        throw error;
    }
};


export const getComputerByName = async (name) => {
    try {
        const computer = await Computer.findOne({ name });
        if (!computer) {
            return null;
        }
        return computer;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * This function saves a computer in the db
 * @param {
*  name: string,
*  laboratory: ObjectId,
* }
*/
export const postNewComputer = async (computer) => {
    try {
        return await Computer.create(computer);
    } catch (error) {
        console.error('Error at save the new computer:', error);
        throw error;
    }
};

