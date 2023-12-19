import { appReader } from "./reader/app-reader.js";
import exitHook from 'exit-hook';

let isRunning = true;
const interval = 1000;

const run = async () => {
  const intervalId = setInterval(async () => {
    try {
      await appReader();
    } catch (error) {
      isRunning = false;
      console.error('Error in appReader:', error.message);
      clearInterval(intervalId);
    }
  }, interval);
};

run();

exitHook(() => {
  isRunning = false;
});