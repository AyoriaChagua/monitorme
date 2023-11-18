export const timer = (nombre,  interval = 1000) => {
    let timerId;
    let timeElapsed = 0;
    let inPause = false;

    const start = () => {
        timerId = setInterval(() => {
            if (!inPause) {
                timeElapsed += interval;
            }
        }, interval);
    };

    const pause = () => {
        clearInterval(timerId);
        inPause = true;
    };

    const resume = () => {
        inPause = false;
        start();
    };

    const stop = () => {
        clearInterval(timerId);
        return timeElapsed / 1000
    };

    return {
        start,
        pause,
        resume,
        stop
    };
}