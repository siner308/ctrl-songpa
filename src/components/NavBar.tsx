import useTranslation from '@/hooks/useTranslation';
import React, { useState } from 'react';
import NavBarButtonGroup from '@/components/NavBarButtonGroup';

export default function NavBar() {
  const i18n = useTranslation();

  return (
    <div className={'bg-blue-500 flex justify-between p-2'}>
      <div className={'flex'}>
        <img alt={'icon'} className={'h-10 mr-2 bg-blue-100 rounded-md'} src={'/logo.png'}/>
        <span className={'self-center text-white text-2xl'}>{i18n.title}</span>
      </div>
      <div className={'flex mobile:flex-col self-center'}>
        <NavBarButtonGroup />
      </div>
    </div>
  );
};
