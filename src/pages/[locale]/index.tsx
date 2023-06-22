import Timer from '@/components/Timer';
import useTranslation from '@/hooks/useTranslation';

export default function Index() {
  const i18n = useTranslation();
  const telegramButtonClick = () => {
    location.href = '#';
    alert('준비중입니다. Not Ready Yet.')
  }
  return (
    <div>
      <img
        alt={'banner'}
        className={'max-h-96 overflow-hidden w-full object-cover bg-cover bg-center'}
        src={'/banner.jpeg'}
      />
      <div className={'px-4'}>
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
        <div className={'mt-10 text-center'}>
          <img alt={'telegram icon'} onClick={telegramButtonClick} className={'cursor-pointer m-auto h-24'} src={'/telegram.jpeg'}/>
          <span>{i18n.joinTelegram}</span>
        </div>

      </div>
    </div>
  );
}
