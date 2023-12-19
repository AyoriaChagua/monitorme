import { getActiveWindow } from './active-window.js';
import { timer } from '../utils/timer.js';
import exitHook from 'exit-hook';
import { getActiveSoftware } from './active-software.js';
import { recordInLog } from '../utils/record-in-logs.js';
import { postMonitoringInfo } from '../services/monitorme-service.js';
import os from 'os'

const hostname = os.hostname();
let activeTimers = {};

export const appReader = async () => {
  try {
    const { removedApps, appsInUse, addedApps } = await getActiveSoftware();
    if (removedApps.length > 0) {
      handleClosedApps(removedApps);
    }
    const { app } = await getActiveWindow(appsInUse);
    if (addedApps.length > 0) {
      handleClosedApps(addedApps);
    }
    
    if (activeTimers[app]) {
      if (activeTimers[app].inPause) {
        pauseAllTimers();
        activeTimers[app].inPause = false
        activeTimers[app].resume();
      }
    } else {
      pauseAllTimers();
      createTimerForWindow(app);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

const createTimerForWindow = (windowName) => {
  const timerName = `Timer_${windowName}`;
  const newTimer = timer(timerName, 1000);
  activeTimers[windowName] = {
    ...newTimer,
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
    if (activeTimers[app]) {
      activeTimers[app].duration += activeTimers[app].stop();
      const { duration } = activeTimers[app]
      const result = {
        name: app,
        duration,
        computer: hostname,
        type: 'Desktop Application'
      };
      postMonitoringInfo(result);
      delete activeTimers[app];
    }
  })
}

exitHook(() => {
  recordInLog(activeTimers)
});
