import monitor from 'node-active-window';

export const getActiveWindow = (softwareActive) => {
    return new Promise((resolve, reject) => {
        monitor.getActiveWindow((err, window) => {
            if (err) {
                reject(err);
            } else {
                const { app, title } = window;
                const activeApp = extractAppName(softwareActive, title, app);
                const activeWindow = { app: activeApp };
                resolve(activeWindow);
            }
        });
    });
};


const extractAppName = (softwareActive, title, app) => {
    if (!title && !app) return 'unknown';

    if (app && softwareActive.includes(app)) return app;

    const titleWithoutSymbols = title ? title.replace(/[^\w\s]/g, '') : '';

    if (title && softwareActive.includes(titleWithoutSymbols)) {
        return titleWithoutSymbols;
    } else {
        const matchingApp = softwareActive.find(activeApp => titleWithoutSymbols.includes(activeApp));
        return matchingApp || 'unknown';
    }
};

