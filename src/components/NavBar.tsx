import useTranslation from '@/hooks/useTranslation';
import LocaleButton from '@/components/LocaleButton';

export default function NavBar() {
  const i18n = useTranslation();
  return (
    <div className={'bg-blue-500 flex justify-between p-2'}>
      <span className={'self-center text-white text-3xl'}>{i18n.title}</span>
      <LocaleButton />
    </div>
  );
};
