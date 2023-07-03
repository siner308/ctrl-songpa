import Link from 'next/link';
import Image from 'next/image';

export default function LinkGroup() {
  return (
    <div className={"mt-2 text-center flex justify-center"}>
      <div className={"flex mt-10 gap-10"}>
        <Link href={"https://t.me/+pvYWtu9KEJozNzc1"} target={"_blank"}>
          <Image
            alt={"telegram icon"}
            className={
              "rounded-full shadow-lg cursor-pointer m-auto h-[60px]"
            }
            src={"/telegram.jpeg"}
            width={60}
            height={60}
          />
        </Link>
        <Link
          href={"https://instagram.com/2023ctrlsongpa"}
          target={"_blank"}
        >
          <Image
            alt={"instagram icon"}
            className={"rounded-full cursor-pointer m-auto h-16"}
            src={"/instagram.jpeg"}
            width={64}
            height={64}
          />
        </Link>
        <Link
          href={"https://cafe.naver.com/ingressresistance"}
          target={"_blank"}
        >
          <Image
            alt={"navercafe icon"}
            className={
              "rounded-full shadow-lg cursor-pointer m-auto h-[60px]"
            }
            src={"/navercafe.webp"}
            width={60}
            height={60}
          />
        </Link>
      </div>
    </div>
  )
}
