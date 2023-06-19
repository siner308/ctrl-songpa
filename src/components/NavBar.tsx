import useTranslation from '@/hooks/useTranslation';
import React, { useState } from 'react';
import NavBarButtonGroup from '@/components/NavBarButtonGroup';

export default function NavBar() {
  const i18n = useTranslation();
  const [open, setOpen] = useState(false);
  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const targetTagName = target.tagName.toLowerCase();
    if (open && (targetTagName !== 'nav')) return;
    setOpen(!open);
  }

  return (
    <div className={'bg-blue-500 flex justify-between p-2'}>
      <span className={'self-center text-white text-3xl'}>{i18n.title}</span>
      <div className={'flex mobile:flex-col self-center'}>
        <button className={'mobile:block hidden'} onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <div id='desktop' className={`mobile:hidden block`}>
          <NavBarButtonGroup />
        </div>
        <div id={'mobile'} className={`mobile:block hidden`}>
          {open ? <nav
            className={'flex fixed left-0 right-0 top-0 bottom-0 h-full w-full bg-gray-100 bg-opacity-50'}
            onClick={toggle}
          >
            <NavBarButtonGroup />
          </nav> : null}
        </div>
      </div>
    </div>
  );
};
