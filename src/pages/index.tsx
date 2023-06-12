import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  if (router.locale === 'kr') {
    router.push('/kr');
  } else {
    router.push('/en');
  }
  return null;
}
