import { appReader } from "./reader/app-reader.js";
import exitHook from 'exit-hook';


let isRunning = true;

const interval = 1000; 

const run = async () => {
  while (isRunning) {
    try {
      await appReader();
    } catch (error) {
      isRunning = false
      console.error('Error in appReader:', error.message);
    }
    await new Promise(resolve => setTimeout(resolve, interval));
  }
};

run();

exitHook(() => {
	isRunning = false
});
