import Link from 'next/link';
import { useEffect } from 'react';
import useTranslation from '@/hooks/useTranslation';

export default function RSVP() {
  const i18n = useTranslation();
  const onClick = () => {
    alert(i18n.comingSoon);
  };

  return (
    <div className={''}>
      <div
        onClick={onClick}
        className={'flex justify-center items-center ' +
          'mx-auto max-w-xs ' +
          'cursor-pointer ' +
          'text-white text-xl rounded-full ' +
          'h-10 text-center mt-8 bg-[#4ba5f5]'}
      >
        {i18n.rsvp}
      </div>
      {/*<Link target={'_blank'} className={''} href={'https://register.songpa.willbe.blue/'}>*/}
      {/*</Link>*/}
    </div>
  );
}
