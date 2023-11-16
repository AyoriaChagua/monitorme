import path from 'path';
import fs from 'fs'

const logFilePath = path.join('src', 'logs', 'app_usage_log.json');

export const recordInLog =  (appUsageLog) => {
    const data = JSON.stringify(appUsageLog, null, 2);
    try {
        fs.writeFileSync(logFilePath, data);
    } catch (error) {
        console.error('Error at saving the file ', error.message);
    }
};

export const loadLocalRegistry = () => {
    try {
        const data = fs.readFileSync(logFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error at loading local registry', error.message);
        return null;
    }
};

