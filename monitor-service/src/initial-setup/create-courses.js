import Career from "../models/career-model.js";
import Course from "../models/course-model.js";


const createCourses = async () => {
    try {
        const count = await Course.estimatedDocumentCount();
        const c24 = await Career.findOne({ carrerCode: 'C24' });
        const c20 = await Career.findOne({ carrerCode: 'C20' });
        if (count > 0) return;
        const coursesData = [
            {
                name: 'Desarrollo de Aplicaciones Web Avanzado',
                startTime: '09:40:00',
                endTime: '12:10:00',
                career: c24._id
            },
            {
                name: 'Desarrollo de Aplicaciones en la Nube',
                startTime: '09:40:00',
                endTime: '12:10:00',
                career: c24._id
            },
            {
                name: 'Tecnologías Emergentes',
                startTime: '13:00:00',
                endTime: '15:30:00',
                career: c24._id
            },
            {
                name: 'Construcción y Pruebas de Software',
                startTime: '13:00:00',
                endTime: '15:30:00',
                career: c24._id
            },
            {
                name: 'Desarrollo de Aplicaciones en Internet',
                startTime: '13:00:00',
                endTime: '15:30:00',
                career: c24._id
            },
            {
                name: 'Desarrollo de Aplicaciones Empresariales Avanzado',
                startTime: '19:40:00',
                endTime: '22:10:00',
                career: c24._id
            },
            {
                name: 'Programación Orientada a Objetos',
                startTime: '15:30:00',
                endTime: '17:10:00',
                career: c24._id
            },
            {
                name: 'Administración de Sistemas Operativos Avanzado',
                startTime: '13:00:00',
                endTime: '15:30:00',
                career: c20._id
            },
            {
                name: 'Tecnologías de Acceso a Redes',
                startTime: '08:00:00',
                endTime: '10:30:00',
                career: c20._id
            },
            {
                name: 'Redes de Área Local',
                startTime: '10:30:00',
                endTime: '12:30:00',
                career: c20._id
            },
            {
                name: 'Seguridad en Redes',
                startTime: '15:30:00',
                endTime: '18:00:00',
                career: c20._id
            },
            {
                name: 'Servicios de Red',
                startTime: '08:00:00',
                endTime: '10:30:00',
                career: c20._id
            },
            {
                name: 'Telecomunicaciones',
                startTime: '10:30:00',
                endTime: '12:30:00',
                career: c20._id
            },
            {
                name: 'Redes Inalámbricas',
                startTime: '13:00:00',
                endTime: '15:30:00',
                career: c20._id
            },
            {
                name: 'Proyecto Integrador en Redes y Comunicaciones',
                startTime: '15:30:00',
                endTime: '18:00:00',
                career: c20._id
            }
        ];

        const coursesPromises = coursesData.map(async (courseData) => {
            const course = new Course(courseData);
            await course.save();
            return course;
        });
        const courses = await Promise.all(coursesPromises);
        console.log('courses created successfully.')
        return courses;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default createCourses;