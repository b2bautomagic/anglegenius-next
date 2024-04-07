// LaunchCountdown.tsx
import { useState, useEffect } from 'react';
import TimerLayout from './TimerLayout';

interface CountdownState {
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function LaunchCountdown() {
  const [countdownDate, setCountdownDate] = useState(new Date('04/09/2024').getTime());
  const [state, setState] = useState<CountdownState>({
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const intervalId = setInterval(setNewTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString().padStart(2, '0');
      const minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      ).toString().padStart(2, '0');
      const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000).toString().padStart(2, '0');

      setState({ days, hours, minutes, seconds });
    }
  };

  return (
    <TimerLayout>
        <div>
            <h4 className='text-2xl font-semibold'>Launch in: </h4>
        </div>
        <div>
            <span className='text-2xl font-semibold'>{state.days} days, {state.hours}:{state.minutes}:{state.seconds}</span>
        </div>
    </TimerLayout>
  );
}
