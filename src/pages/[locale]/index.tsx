import Timer from '@/components/Timer';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/link';

export default function Index() {
  const i18n = useTranslation();

  return (
    <div>
      <img
        alt={'header'}
        className={'h-96 overflow-hidden w-full object-cover bg-cover bg-center'}
        src={'/header.jpeg'}
      />
      <div className={'relative h-[calc(100vh-440px)] px-4'}>
        <div className={"z-[-1] h-full left-[0px] w-[100vw] absolute bg-[url('/background.jpeg')] object-contain bg-center opacity-20"} />
        <Timer/>
        <div>
          <div className={'mx-auto mt-4 text-xl w-96 text-blue-500 text-center'}>{i18n.ingress.anomaly.title}</div>
          <div className={'mx-auto mt-4 text-xl w-96 text-blue-500 text-center'}>{i18n.ingress.anomaly.date}</div>
          <div className={'mx-auto mt-4 text-xl w-96 text-blue-500 text-center'}>{i18n.location.name}</div>
          {i18n.location.introduce.split('\n').map((line, index) => (
            <div key={index} className={'mx-auto mt-4 text-l w-full text-center'}>{line}</div>
          ))}
          <div className={'mx-auto mt-4 text-xl w-96 text-blue-500 text-center'}>{i18n.location.shortName.toUpperCase()} WILL BE BLUE!</div>
        </div>
        <div className={'mt-10 text-center flex justify-center'}>
          <div className={'flex mt-10 gap-10'}>
            <Link href={'https://t.me/+pvYWtu9KEJozNzc1'} target={'_blank'}>
              <img alt={'telegram icon'} className={'rounded-full shadow-lg cursor-pointer m-auto h-[90px]'} src={'/telegram.jpeg'}/>
            </Link>
            <Link href={'https://instagram.com/2023ctrlsongpa'} target={'_blank'}>
              <img alt={'instagram icon'} className={'rounded-full cursor-pointer m-auto h-24'} src={'/instagram.jpeg'}/>
            </Link>
            <Link href={'https://cafe.naver.com/ingressresistance'} target={'_blank'}>
              <img alt={'navercafe icon'} className={'rounded-full shadow-lg cursor-pointer m-auto h-[90px]'} src={'/navercafe.webp'}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
