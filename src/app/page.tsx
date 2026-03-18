import Header from "./components/Header";
import Hero from "./components/Hero";
import CostComparison from "./components/CostComparison";
import NewOffice from "./components/NewOffice";
import FeatureCRM from "./components/FeatureCRM";
import FeatureCalendars from "./components/FeatureCalendars";
import FeatureFunnels from "./components/FeatureFunnels";
import FeatureMarketing from "./components/FeatureMarketing";
import Roadmap from "./components/Roadmap";
import SocialProof from "./components/SocialProof";
import TechnicalSetup from "./components/TechnicalSetup";
import WhatsIncluded from "./components/WhatsIncluded";
import PricingCard from "./components/PricingCard";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CostComparison />
        <NewOffice />
        <FeatureCRM />
        <FeatureCalendars />
        <FeatureFunnels />
        <FeatureMarketing />
        <Roadmap />
        <SocialProof />
        <TechnicalSetup />
        <WhatsIncluded />
        <PricingCard />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
