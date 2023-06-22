import RootLayout from '@/components/RootLayout';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

type Props = {
  Component: any;
  pageProps: any;
}


export default function App({ Component, pageProps }: Props) {
  return (
    <RootLayout>
      <Script
        strategy={'afterInteractive'}
        src="https://www.googletagmanager.com/gtag/js?id=G-29EKQ0KSHJ"
      />
      <Script
        id={'gtag-init'}
        strategy={'afterInteractive'}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments)
            }
            gtag('js', new Date());
  
            gtag('config', 'G-29EKQ0KSHJ');
            `,
        }}
      />
      <Component {...pageProps} />
      <Analytics/>
    </RootLayout>
  );
}
