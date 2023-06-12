import { useRouter } from 'next/router';

const useLocale = () => {
  const router = useRouter();
  const locale = router.query.locale;
  if (typeof locale !== 'string') {
    return 'kr';
  }

  if (!['en', 'kr'].some((l) => l === locale)) {
    return 'kr';
  }

  return locale as 'en' | 'kr';
};

export default useLocale;
