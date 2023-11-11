import { exec } from 'child_process'

let previusApps = [];

export function appReader() {
  exec('tasklist /fo csv /nh', (error, stdout) => {
    if (error) {
      console.error('Error at get process:', error);
      return;
    }

    const lines = stdout.trim().split('\n');
    const appsInUse = [];
    const seenNames = new Set();

    lines.forEach( line => {
      const columns = line
        .split('","')
        .map(column =>  column.replace(/"/g, ''));

      const [name, pid, , sessionNum] = columns;
      const parsedPid = parseInt(pid, 10);
      const parsedSessionNum = parseInt(sessionNum, 10);
      const currentTime = new Date().toLocaleString();

      if(parsedSessionNum !== 0 && !seenNames.has(name)){
        seenNames.add(name);
        appsInUse.push({
          name, 
          pid: parsedPid, 
          currentTime,
          memUsage: columns[4]
        });
      }
    });

    const addedApps = appsInUse.filter(
      app => !previusApps.
      some(previusApp => previusApp.name === app.name)
    );

    const removedApps = previusApps.filter(
      previusApp => !appsInUse.
      some(app => app.name === previusApp.name)
    );
    
    if (addedApps.length > 0) {
      console.log('Nuevas aplicaciones en uso:', addedApps);
    }

    if(removedApps.length > 0){
      console.log('aplicaciones cerradas:', removedApps);
    }

    previusApps = appsInUse;
  })
}