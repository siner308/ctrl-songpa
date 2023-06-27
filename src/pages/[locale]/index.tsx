import Timer from "@/components/Timer";
import useTranslation from "@/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  const i18n = useTranslation();

  return (
    <div>
      <div className="h-96 w-full relative">
        <Image
          alt={"header"}
          className={"overflow-hidden object-cover bg-cover bg-center"}
          src={"/header.jpeg"}
          fill
        />
      </div>
      <div className="relative h-full px-4 pb-20 overflow-x-hidden">
        <div className="z-[-1] h-full w-[100vw] top-0 left-0 absolute bg-[url('/background.jpeg')] bg-cover bg-center opacity-[15%]" />
        <Timer />
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
        <div className={"mt-10 text-center flex justify-center"}>
          <div className={"flex mt-10 gap-10"}>
            <Link href={"https://t.me/+pvYWtu9KEJozNzc1"} target={"_blank"}>
              <Image
                alt={"telegram icon"}
                className={
                  "rounded-full shadow-lg cursor-pointer m-auto h-[90px]"
                }
                src={"/telegram.jpeg"}
                width={90}
                height={90}
              />
            </Link>
            <Link
              href={"https://instagram.com/2023ctrlsongpa"}
              target={"_blank"}
            >
              <Image
                alt={"instagram icon"}
                className={"rounded-full cursor-pointer m-auto h-24"}
                src={"/instagram.jpeg"}
                width={96}
                height={96}
              />
            </Link>
            <Link
              href={"https://cafe.naver.com/ingressresistance"}
              target={"_blank"}
            >
              <Image
                alt={"navercafe icon"}
                className={
                  "rounded-full shadow-lg cursor-pointer m-auto h-[90px]"
                }
                src={"/navercafe.webp"}
                width={90}
                height={90}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
