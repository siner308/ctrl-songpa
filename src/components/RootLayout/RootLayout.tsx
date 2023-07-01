import '../../app/globals.css';
import NavBar from '@/components/RootLayout/Navbar/NavBar';
import Footer from '@/components/RootLayout/Footer';
import Head from 'next/head';
import useLocale from '@/hooks/useLocale';
import { Noto_Sans_KR } from 'next/font/google';

type Props = {
  children: React.ReactNode;
}

const notoSansKr = Noto_Sans_KR({
  subsets: [ 'latin' ],
  weight: [ '400', '700' ],
});
export default function RootLayout({ children }: Props) {
  const locale = useLocale();
  let dataLayer;
  return (
    <main
      style={{ height: '100vh' }}
      className={`flex-col justify-between flex ${notoSansKr.className}`}
    >
      <Head>
        <title>Ctrl Songpa</title>
        <meta property="og:description" content="19 August 2023 (Sat) Songpa, Seoul, South Korea"/>
        <meta property="og:url" content={`https://ctrl-songpa.vercel.app/${locale}`}/>
        <meta property="og:title" content="Ctrl Songpa"/>
        <meta property="og:image" content="https://ctrl-songpa.vercel.app/logo.png"/>
      </Head>
      <NavBar/>
      <div className={'flex-1'}>
        {children}
      </div>
      <Footer/>
    </main>
  );
}
