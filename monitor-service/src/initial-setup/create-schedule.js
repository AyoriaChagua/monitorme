import Laboratory from '../models/laboratory-model.js';
import Schedule from '../models/schedule-model.js';
import Course from '../models/course-model.js';

const createSchedules = async () => {
    try {
        const count = await Schedule.estimatedDocumentCount();

        if (count > 0) return;
        const lab1504 = await Laboratory.findOne({ name: 'LAB1504' });
        const lab1505 = await Laboratory.findOne({ name: 'LAB1505' });
        const data = [
            {
                day: 'Monday',
                laboratory: lab1504._id
            },
            {
                day: 'Tuesday',
                laboratory: lab1504._id
            },
            {
                day: 'Wednesday',
                laboratory: lab1504._id
            },
            {
                day: 'Thursday',
                laboratory: lab1504._id
            },
            {
                day: 'Friday',
                laboratory: lab1504._id
            },
            {
                day: 'Saturday',
                laboratory: lab1504._id
            },
            {
                day: 'Monday',
                laboratory: lab1505._id
            },
            {
                day: 'Tuesday',
                laboratory: lab1505._id
            },
            {
                day: 'Wednesday',
                laboratory: lab1505._id
            },
            {
                day: 'Thursday',
                laboratory: lab1505._id
            },
            {
                day: 'Friday',
                laboratory: lab1505._id
            },
            {
                day: 'Saturday',
                laboratory: lab1505._id
            }
        ];

        const schedulesPromises = data.map(async (obj) => {
            const schedule = new Schedule({
                day: obj.day,
                laboratory: obj.laboratory,
                courses: []
            });

            const courses = await Course.find();

            const shuffledCourses = shuffleArray(courses);

            shuffledCourses.forEach(course => {
                const conflict = schedule.courses.some(existingCourse =>
                    (course.startTime >= existingCourse.startTime &&
                        course.startTime < existingCourse.endTime) ||
                    (course.endTime > existingCourse.startTime &&
                        course.endTime <= existingCourse.endTime)
                );

                if (!conflict) {
                    schedule.courses.push(course);
                }
            });

            await schedule.save();
            return schedule;
        });

        await Promise.all(schedulesPromises);
        console.log('Schedules created successfully.');
    } catch (error) {
        console.error(error);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default createSchedules;
