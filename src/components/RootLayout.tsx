import '../app/globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <main
      style={{ height: '100vh' }}
      className={'flex-col justify-between flex'}
    >
      <NavBar/>
      <div className={'flex-1'}>
        {children}
      </div>
      <Footer/>
    </main>
  );
}
