import SoftwareType from "../models/software-type-model.js";

const createSoftwareTypes = async () => {
    try {
        const count = await SoftwareType.estimatedDocumentCount();
        if (count > 0) return;
        await Promise.all([
            new SoftwareType({
                name: 'Web Application',
                description: 'Applications that run in a web browser. They can be accessed from any device with a browser and an internet connection.'
            }).save(),
            new SoftwareType({
                name: 'Mobile Application',
                description: 'Designed to run on mobile devices such as phones and tablets. They can be native (specifically developed for a platform like iOS or Android), hybrid (a combination of web and native technologies), or web-based.'
            }).save(),
            new SoftwareType({
                name: 'Desktop Application',
                description: 'Programs designed to run on desktop computers or laptops. They can be native applications installed on the operating system or web-based applications that run in a browser.'
            }).save(),
        ]);
        console.log('Software types created successfully.');
    } catch (error) {
        console.error('Error en tipos ', error);
    }
}

export default createSoftwareTypes;