import useTranslation from '@/hooks/useTranslation';

export default function Introduce() {
  const i18n = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <div className={"flex mx-auto text-xl text-[#4ba5f5]"}>
        {i18n.ingress.anomaly.title}
      </div>
      <div className={"flex mx-auto  text-xl text-[#4ba5f5]"}>
        {i18n.ingress.anomaly.date}
      </div>
      <div className={"flex mx-auto text-xl text-[#4ba5f5]"}>
        {i18n.location.name}
      </div>
      {i18n.location.introduce.split("\n").map((line, index) => (
        <div key={index} className={"flex mx-auto text-xl text-center"}>
          {line}
        </div>
      ))}
      <div className={"flex mx-auto text-xl text-[#4ba5f5]"}>
        {i18n.location.shortName.toUpperCase()} WILL BE BLUE!
      </div>
    </div>
  )
}
