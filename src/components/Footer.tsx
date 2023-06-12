import useLocale from '@/hooks/useLocale';
import useTranslation from '@/hooks/useTranslation';
import LocaleButton from '@/components/LocaleButton';

export default function Footer() {
  const i18n = useTranslation();
  return (
    <div className={'bg-gray-300 flex justify-between'}>
      <div>{i18n.ingress.anomaly.location}</div>
      <div>19 August 2023</div>
    </div>
  );
};
