import Laboratory from "../models/laboratory-model.js"

const createLaboratories = async () => {
    try {
        const count = await Laboratory.estimatedDocumentCount();
        if (count > 0) return;
        await Promise.all([
            new Laboratory({
                name: 'LAB1502',
                studentCapacity: 15
            }).save(),
            new Laboratory({
                name: 'LAB1503',
                studentCapacity: 15
            }).save(),
            new Laboratory({
                name: 'LAB1504',
                studentCapacity: 10
            }).save(),
            new Laboratory({
                name: 'LAB1505',
                studentCapacity: 10
            }).save(),
        ]);
        console.log('laboratories created successfully.')
    } catch (error) {
        console.error(error);
    }
}

export default createLaboratories;