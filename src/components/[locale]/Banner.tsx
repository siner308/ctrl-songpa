import Image from 'next/image';

export default function Banner() {
  return (
    <div className="h-96 w-full relative">
      <Image
        alt={"header"}
        className={"overflow-hidden object-cover bg-cover bg-center"}
        src={"/header.jpeg"}
        fill
      />
    </div>
  )
}
