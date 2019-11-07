import React, { useState, useEffect } from 'react';
import Intent from './Intent';

const Model = (intent) => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);


  useEffect(() => {
    if (intent === Intent.START) {
      setRunning(true);
      const timerId = setTimeout(() => { setTime(time + 1); }, 1000);
      return () => clearTimeout(timerId);
    }

    if (intent === Intent.CONTINUE) {
      setRunning(true);
      const timerId = setTimeout(() => { setTime(time + 1); }, 1000);
      return () => clearTimeout(timerId);
    }

  }, [intent, time]);

  useEffect(() => {
    if (intent === Intent.STOP) {
      setRunning(false);
    }
  }, [intent]);

  useEffect(() => {
    if (intent === Intent.RESET) {
      setTime(0);
      setRunning(false);
    }
  }, [intent]);

  return { time: time, running: running };
}
export default Model;