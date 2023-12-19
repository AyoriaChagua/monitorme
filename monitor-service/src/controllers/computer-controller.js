import { getComputerByName } from "../services/computers-service.js";

export const getComputerInfo = async (req, res) => {
    try {
        const name = req.params.name;
        const computer = await getComputerByName(name);
        if (computer) res.status(200).json(computer);
        else res.status(404).json({ error: 'Computer not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}