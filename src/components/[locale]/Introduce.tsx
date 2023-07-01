import useTranslation from '@/hooks/useTranslation';

export default function Introduce() {
  const i18n = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <div className={"flex mx-auto  text-xl text"}>
        <u><b>{i18n.ingress.anomaly.date}</b></u>
      </div>
      <div className={"flex mx-auto text-xl"}>
        <u><b>{i18n.location.name}</b></u>
      </div>
      <div className={"flex mx-auto text-2xl text-[#4ba5f5] mt-12"}>
        {i18n.location.shortName.toUpperCase()} WILL BE BLUE!
      </div>
    </div>
  )
}
