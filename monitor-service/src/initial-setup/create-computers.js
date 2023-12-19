import Laboratory from "../models/laboratory-model.js";
import Computer from "../models/computer-model.js";

export const createComputers = async () => {
    try {
        const count = await Computer.estimatedDocumentCount();
        const lab1504 = await Laboratory.findOne({ name: 'LAB1504' });
        const lab1505 = await Laboratory.findOne({ name: 'LAB1505' });
        if (count > 0) return;
        const data = [
            {
                name:  'DESKTOP-2CVM183',
                laboratory: lab1505._id
            },
            {
                name:  'AyoriaXCh01',
                laboratory: lab1504._id
            },
            {
                name:  'DESKTOP-6HHNMAC',
                laboratory: lab1505._id
            },
            {
                name:  'LAPTOP-VR12UDLG',
                laboratory: lab1504._id
            },
        ]
        const computersPromises = data.map(async computerData => {
            const computer = new Computer(computerData);
            await computer.save();
            return computer;
        });
        await Promise.all(computersPromises);
        console.log('computers created successfully');
    } catch (error) {
        console.error(error);
        throw error
    }
}

export default createComputers;