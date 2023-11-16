import { getActiveWindow } from './active-window.js';
import { recordInLog } from '../utils/record-in-logs.js';
import exitHook from 'exit-hook';
import { getActiveSoftware } from './active-software.js';

let appsInUse = [];

export const appReader = async () => {
  try {
    const result = await getActiveSoftware();
    const { addedApps, removedApps, appsInUse } = result;

    if (addedApps.length > 0) {
      console.log('Nuevas aplicaciones en uso:', addedApps);
    }

    if (removedApps.length > 0) {
      console.log('Aplicaciones cerradas:', removedApps);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

const simulateApiCall = async (appData) => {
  console.log('Simulando envío a la API:', appData);
};

exitHook(() => {
  recordInLog(appsInUse);
});
