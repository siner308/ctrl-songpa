import LocaleButton from '@/components/LocaleButton';
import React from 'react';
import Link from 'next/link';

export default function NavBarButtonGroup() {
  return (
    <div className={'m-auto flex gap-10 mobile:flex-col mobile:items-center'}>
      <Link className={'self-center text-lg hover:underline'} href={'https://ingress.com'}>Ingress</Link>
      <Link className={'self-center text-lg hover:underline'} href={'https://intel.ingress.com'}>Intel</Link>
      <LocaleButton/>
    </div>
  );
}
