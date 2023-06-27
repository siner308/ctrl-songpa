import { Menu } from '@headlessui/react';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/link';
import useLocale from '@/hooks/useLocale';

export default function LocaleButton() {
  const i18n = useTranslation();
  const locale = useLocale();
  return (
    <Menu as="div" className="relative inline-block text-left">
        <Link
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          href={`/${locale === 'kr' ? '/en' : '/kr'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>
          {i18n.language}
        </Link>
    </Menu>
  );
}
