import { useRouter } from 'next/router';

const useLocale = () => {
  const router = useRouter();
  return router.query.locale;
};

export default useLocale;
