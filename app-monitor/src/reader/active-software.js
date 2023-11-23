import { exec } from 'child_process';

const powerShellCommand = 'gps | ? {$_.mainwindowhandle -ne 0} | select Description | ft -hide';

let previusApps = [];

export const getActiveSoftware = async () => {
  return new Promise((resolve, reject) => {
    exec(`powershell -Command "${powerShellCommand}"`, (error, stdout) => {
      if (error) {
        console.error('Error al obtener los procesos:', error);
        reject(error);
        return;
      }

      const lines = stdout.trim().split('\n');
      const appsInUse = lines.map(line => line.trim()).filter(Boolean);
      const addedApps = appsInUse.filter(
        app => !previusApps.includes(app)
      );

      const removedApps = previusApps.filter(
        previusApp => !appsInUse.includes(previusApp)
      );
      previusApps = appsInUse;

      resolve({ addedApps, removedApps, appsInUse });
    });
  });
};
