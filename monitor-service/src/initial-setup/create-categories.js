import SoftwareCategory from '../models/software-category-model.js';

const createCategories = async () => {
    try {
        const countCategories = await SoftwareCategory.estimatedDocumentCount();
        if (countCategories > 0) return;

        const categoriesData = [
            {
                name: 'Game',
                description: 'Entertainment applications designed for amusement, often involving challenges, competition, or simulations.'
            },
            {
                name: 'Education',
                description: 'Apps focused on imparting knowledge, skills, or providing learning experiences in various subjects or disciplines.'
            },
            {
                name: 'Productivity',
                description: 'Tools and applications designed to enhance efficiency, organization, and time management for personal or professional tasks.'
            },
            {
                name: 'Social Networking',
                description: 'Entertainment applications designed for amusement, often involving challenges, competition, or simulations.'
            },
            {
                name: 'Development Tools',
                description: 'Entertainment applications designed for amusement, often involving challenges, competition, or simulations.'
            },
            {
                name: 'Entertainment',
                description: 'Platforms providing a variety of content for leisure, such as streaming services for movies, TV shows, and digital media.'
            },
            {
                name: 'Artificial Intelligence',
                description: 'Excessive use of these tools can prevent the student from developing efficiently.'
            },
            {
                name: 'Browser',
                description: 'The browser is the software used par excellence by any user.'
            }
        ];

        await Promise.all(
            categoriesData.map(categoryData => new SoftwareCategory(categoryData).save())
        );
        console.log('categories created successfully.');
    } catch (error) {
        console.error(error);
    }
}

export default createCategories;