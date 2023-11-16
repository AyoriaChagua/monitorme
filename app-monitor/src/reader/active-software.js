import { exec } from 'child_process';

let previusApps = [];
export const getActiveSoftware = async () => {
  return new Promise((resolve, reject) => {
    exec('tasklist /fo csv /nh', (error, stdout) => {
      if (error) {
        console.error('Error at get process:', error);
        reject(error);
        return;
      }

      const lines = stdout.trim().split('\n');
      const appsInUse = [];
      const seenNames = new Set();

      lines.forEach(line => {
        const columns = line
          .split('","')
          .map(column => column.replace(/"/g, ''));

        const [name, , , sessionNum] = columns;
        const parsedSessionNum = parseInt(sessionNum, 10);
        const currentTime = new Date();

        if (parsedSessionNum !== 0 && !seenNames.has(name)) {
          seenNames.add(name);
          appsInUse.push({
            name: name.replace(".exe", ""),
            start_time: currentTime,
            memUsage: columns[4]
          });
        }
      });

      const addedApps = appsInUse.filter(
        app => !previusApps.some(previusApp => previusApp.name === app.name)
      );

      const removedApps = previusApps.filter(
        previusApp => !appsInUse.some(app => app.name === previusApp.name)
      );

      previusApps = appsInUse;

      resolve({ addedApps, removedApps, appsInUse });
    });
  });
};
