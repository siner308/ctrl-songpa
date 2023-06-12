import { useEffect, useState } from 'react';

export default function Timer() {
  const [remainTime, setRemainTime] = useState<number>(null);

  useEffect(() => {
    setInterval(() => {
      setRemainTime(new Date('2023-08-19 00:00:00') - new Date());
    }, 50)
  }, [])


  const day = Math.floor(remainTime / (1000 * 60 * 60 * 24))
  const hour = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minute = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60))
  const second = Math.floor((remainTime % (1000 * 60)) / 1000)
  const microsecond = Math.floor(remainTime % 1000)
  return (
    <div>
      <div className={'grid grid-cols-4 text-center text-2xl p-20'}>
        <div>{day}</div>
        <div>{hour}</div>
        <div>{minute}</div>
        <div>{second}.{microsecond}</div>
        <div>Days</div>
        <div>Hours</div>
        <div>Minutes</div>
        <div>Seconds</div>
      </div>
    </div>
  );
}
