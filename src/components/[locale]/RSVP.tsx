import Link from 'next/link';
import { useEffect } from 'react';
import useTranslation from '@/hooks/useTranslation';

export default function RSVP() {
  const i18n = useTranslation();

  return (
    <div className={''}>
      <Link
        target={'_blank'}
        href={'https://register.songpa.willbe.blue/'}
        className={'flex justify-center items-center ' +
          'mx-auto max-w-xs ' +
          'cursor-pointer ' +
          'text-white text-xl rounded-full ' +
          'h-10 text-center mt-8 bg-[#4ba5f5]'}
      >
        {i18n.rsvp}
      </Link>
    </div>
  );
}
