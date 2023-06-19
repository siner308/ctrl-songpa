import RootLayout from '@/components/RootLayout';
import { Analytics } from '@vercel/analytics/react';

type Props = {
  Component: any;
  pageProps: any;
}

export default function App({ Component, pageProps }: Props) {
  return (
    <RootLayout>
      <Component {...pageProps} />
      <Analytics/>
    </RootLayout>
  );
}
