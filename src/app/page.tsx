import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import AIFeaturesSection from "@/components/sections/AIFeaturesSection";
import HowToStartSection from "@/components/sections/HowToStartSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <ReasonsSection />
        <AIFeaturesSection />
        <HowToStartSection />
        <CaseStudiesSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
