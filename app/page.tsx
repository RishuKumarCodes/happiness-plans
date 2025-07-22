import Hero from "./components/Hero";
import AboutSection, { ValuesSection } from "./components/AboutSection";
import ServiceSection from "./components/ServicesSection";
import TrustIndicators from "./components/TrustIndicators";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <ValuesSection />
      <TrustIndicators />
    </>
  );
}
