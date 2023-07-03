import Sponsor from '@/components/[locale]/Sponsor';
import useTranslation from '@/hooks/useTranslation';

export default function SponsorGroup() {
  const i18n = useTranslation();

  const sponsors = [
    '부대닭',
    '카페 바람종',
    '무거공방',
    '파우재'
  ].sort();

  return (
    <div className="mt-8 px-30">
      <div className={'text-center text-2xl mobile:text-base mb-4'}>{i18n.sponsor}</div>
      <div className={'flex justify-center gap-6 mobile:gap-2'}>
        {sponsors.map((sponsor) => {
          return <Sponsor key={sponsor} name={sponsor} />
        })}
      </div>
    </div>
  )
}
