import RootLayout from '@/components/RootLayout';
import {Noto_Sans_KR} from '@next/font/google'

type Props = {
  Component: any;
  pageProps: any;
}


export default function App({ Component, pageProps }: Props) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
