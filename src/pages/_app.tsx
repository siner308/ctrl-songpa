import RootLayout from '@/components/RootLayout';

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
