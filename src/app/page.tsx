import AboutSection from "./_components/about-section";
import FaqSection from "./_components/faq-section";
import FeatureSection from "./_components/techStack-section";
import Footer from "./_components/footer-section";
import InvestmentSection from "./_components/insvestiment-section";
import { IntroSection } from "./_components/intro-section";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <IntroSection />
      <AboutSection />
      <FeatureSection />
      <FaqSection />
      <InvestmentSection />
      <Footer />
    </main>
  );
}
