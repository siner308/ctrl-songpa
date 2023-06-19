import { useEffect, useState } from 'react';
import useTranslation from '@/hooks/useTranslation';

export default function Timer() {
  const i18n = useTranslation();
  const [remainTime, setRemainTime] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setRemainTime(new Date('2023-08-19 00:00:00').getTime() - new Date().getTime());
    }, 10)
  }, [])


  const day = Math.floor(remainTime / (1000 * 60 * 60 * 24))
  const hour = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minute = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60))
  const second = Math.floor((remainTime % (1000 * 60)) / 1000)
  const microsecond = Math.floor((remainTime % 1000) / 10)
  return (
    <div>
      <div className={'grid grid-cols-4 text-center text-2xl p-20'}>
        <div>{day}</div>
        <div>{hour}</div>
        <div>{minute}</div>
        <div>{second}.{microsecond}</div>
        <div className={'mobile:text-sm'}>{i18n.unit.day}</div>
        <div className={'mobile:text-sm'}>{i18n.unit.hour}</div>
        <div className={'mobile:text-sm'}>{i18n.unit.minute}</div>
        <div className={'mobile:text-sm'}>{i18n.unit.second}</div>
      </div>
    </div>
  );
}
