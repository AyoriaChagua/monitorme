import { getActiveWindow } from './active-window.js';
import { timer } from '../utils/timer.js';
import exitHook from 'exit-hook';
import { getActiveSoftware } from './active-software.js';
import { recordInLog } from '../utils/record-in-logs.js';
import { simulateApiCall } from '../services/monitorme-service.js';

let activeTimers = {};

export const appReader = async () => {
  try {
    const { app, title } = await getActiveWindow();
    const { removedApps } = await getActiveSoftware();
    if (removedApps.length > 0) {
      handleClosedApps(removedApps);
    }
    if (activeTimers[app]) {
      if (activeTimers[app].inPause) {
        pauseAllTimers();
        activeTimers[app].inPause = false
        activeTimers[app].resume();
      }
    } else {
      pauseAllTimers();
      createTimerForWindow(app, title);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

const createTimerForWindow = (windowName, title) => {
  const timerName = `Timer_${windowName}`;
  const newTimer = timer(timerName, 1000);
  activeTimers[windowName] = {
    ...newTimer,
    title: title,
    inPause: false,
    duration: 0
  };
  newTimer.start();
}

const pauseAllTimers = () => {
  Object.values(activeTimers).forEach(timer => {
    timer.pause();
    timer.inPause = true
  });
}

const handleClosedApps = closedApps => {
  closedApps.forEach(app => {
    if (activeTimers[app.name]) {
      activeTimers[app.name].duration += activeTimers[app.name].stop();
      const { title, duration } = activeTimers[app.name]
      const words = title.split(/\s* - \s*/);
      let result;
      if (words.length > 1) {
        result = {
          name: words[words.length - 1],
          tab: words[0],
          duration,
        };
      } else {
        result = {
          name: title,
          tab: title,
          duration,
        };
      }
      simulateApiCall(result);
      delete activeTimers[app.name];
    }
  })
}

exitHook(() => {
  recordInLog(activeTimers)
});
