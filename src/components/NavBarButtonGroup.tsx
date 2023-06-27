import LocaleButton from '@/components/LocaleButton';
import React from 'react';

export default function NavBarButtonGroup() {
  return (
    <div className={'m-auto flex gap-10 mobile:flex-col mobile:items-center'}>
      <LocaleButton/>
    </div>
  );
}
