import { useEffect, useState } from 'react';

export default function useCountdown(targetDate) {
  const [countDownDate, setCountDownDate] = useState(
    new Date().getTime(),
  );
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (targetDate) {
      const dateParts = `${targetDate.replace(' ', 'T')}+00:00`;
      setCountDownDate(
        new Date(dateParts).getTime(),
      );
    }
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = countDownDate - new Date().getTime();
      if (newTime > 0) {
        setDays(Math.floor(newTime / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((newTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        setMinutes(Math.floor((newTime % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((newTime % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
