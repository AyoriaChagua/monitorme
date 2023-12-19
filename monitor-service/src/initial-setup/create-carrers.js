import Carrer from '../models/career-model.js';

const createCareers = async () => {
    try {
        const countCategories = await Carrer.estimatedDocumentCount();
        if (countCategories > 0) return;

        const carrersData = [
            {
                name: "Administración de Redes y Comunicaciones",
                carrerCode: "C20"
            },
            {
                name: "Diseño y Desarrollo de Software",
                carrerCode: "C24"
            },
            {
                name: "Diseño y Desarrollo de Simuladores y Videojuegos",
                carrerCode: "C26"
            },
            {
                name: "Big Data y Ciencia de Datos",
                carrerCode: "C28"
            },
            {
                name: "Inteligencia Artificial",
                carrerCode: "C29"
            }
        ];

        const careerPromises = carrersData.map( async carrerData => {
            const carrer = new Carrer(carrerData);
            await carrer.save();
            return carrer;
        });
        await Promise.all(careerPromises);
        console.log('Carrers created successfully.');
    } catch (error) {
        console.error(error);
    }
}

export default createCareers;