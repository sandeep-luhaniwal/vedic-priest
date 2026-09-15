import NavBar from "@/src/components/common/NavBar";
import Hero from "@/src/components/home/Hero";
import TraditionTrustTech from "@/src/components/home/TraditionTrustTech";
import EverythingSpiritual from "@/src/components/home/EverythingSpiritual";
import FindRightPriest from "@/src/components/home/FindRightPriest";
import FromIntentionToRitual from "@/src/components/home/FromIntentionToRitual";
import BringPoojaHome from "@/src/components/home/BringPoojaHome";
import AstrologyGuidance from "@/src/components/home/AstrologyGuidance";
import DivineWisdom from "@/src/components/home/DivineWisdom";
import LearnExperience from "@/src/components/home/LearnExperience";
import SacredEssentials from "@/src/components/home/SacredEssentials";
import ProfessionalGrowth from "@/src/components/home/ProfessionalGrowth";
import TraditionVerification from "@/src/components/home/TraditionVerification";
import MomentsThatMatter from "@/src/components/home/MomentsThatMatter";
import SpiritualCompanion from "@/src/components/home/SpiritualCompanion";
import SacredJourney from "@/src/components/home/SacredJourney";
import Footer from "@/src/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <TraditionTrustTech />
        <EverythingSpiritual />
        <FindRightPriest />
        <FromIntentionToRitual />
        <BringPoojaHome />
        <AstrologyGuidance />
        <DivineWisdom />
        <LearnExperience />
        <SacredEssentials />
        <ProfessionalGrowth />
        <TraditionVerification />
        <MomentsThatMatter />
        <SpiritualCompanion />
        <SacredJourney />
      </main>
      <Footer />
    </div>
  );
}







