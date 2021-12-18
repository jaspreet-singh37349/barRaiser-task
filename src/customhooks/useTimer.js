import { useEffect, useState } from 'react';

const useTimer = (
  initialSeconds,
  initialMinutes,
  initialHours,
  activeSubject
) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [hours, setHours] = useState(initialHours);

  console.log('qq', activeSubject);
  const [start, setStart] = useState(true);

  let timerInterval;

  useEffect(() => {
    if (start) {
      timerInterval = setInterval(() => {
        if (seconds === 60) {
          setSeconds(1);
          if (minutes === 60) {
            setMinutes(1);
            setHours(hours + 1);
          } else setMinutes(minutes + 1);
        } else setSeconds(seconds + 1);
      }, 1000);
    }

    return () => onStop();
  }, [start, seconds]);

  const onStop = () => {
    // setStart(false);
    clearInterval(timerInterval);
  };

  const onStart = () => {
    setStart(true);
  };

  return [seconds, minutes, hours, onStart, onStop];
};

export default useTimer;
