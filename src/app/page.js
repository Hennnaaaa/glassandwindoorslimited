import HeroScrollReveal from "@/components/sections/HeroScrollReveal";
import TrustBar from "@/components/sections/TrustBar";
import SealedUnitsSpotlight from "@/components/sections/SealedUnitsSpotlight";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSteps from "@/components/sections/ProcessSteps";
import GalleryPreview from "@/components/sections/GalleryPreview";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <HeroScrollReveal>
      <TrustBar />
      <SealedUnitsSpotlight />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <GalleryPreview />
      <CtaBanner />
    </HeroScrollReveal>
  );
}
