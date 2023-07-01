import Link from 'next/link';
import Image from 'next/image';

export default function LinkGroup() {
  return (
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
  )
}
