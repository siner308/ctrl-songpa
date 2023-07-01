import Timer from "@/components/[locale]/Timer";
import Banner from '@/components/[locale]/Banner';
import BackgroundImage from '@/components/[locale]/BackgroundImage';
import Introduce from '@/components/[locale]/Introduce';
import LinkGroup from '@/components/[locale]/LinkGroup';
import SponsorGroup from '@/components/[locale]/SponsorGroup';

export default function Index() {
  return (
    <div>
      <Banner />
      <div className="relative h-full px-4 pb-20 overflow-x-hidden">
        <BackgroundImage />
        <Timer />
        <Introduce />
        <LinkGroup />
        <SponsorGroup />
      </div>
    </div>
  );
}
