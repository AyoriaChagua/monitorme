import monitor from 'node-active-window';

export const getActiveWindow = () => {
    return new Promise((resolve, reject) => {
        monitor.getActiveWindow((err, window) => {
            if (err) {
                reject(err);
            } else {
                const currentTime = new Date();
                const { app, title } = window;
                const activeWindow = { app, title, start_time: currentTime };
                resolve(activeWindow);
            }
        });
    });
};