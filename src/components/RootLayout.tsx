import '../app/globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import useLocale from '@/hooks/useLocale';


type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const locale = useLocale();
  return (
    <main
      style={{ height: '100vh' }}
      className={'flex-col justify-between flex'}
    >
      <Head>
        <title>Ctrl Songpa</title>
        <meta property="og:description" content="19 August 2023 (Sat) Songpa, Seoul, South Korea" />
        <meta property="og:url" content={`https://ctrl-songpa.vercel.app/${locale}`} />
        <meta property="og:title" content="Ctrl Songpa" />
        <meta property='og:image' content='https://ctrl-songpa.vercel.app/irk.webp' />
      </Head>
      <NavBar/>
      <div className={'flex-1'}>
        {children}
      </div>
      <Footer/>
    </main>
  );
}
