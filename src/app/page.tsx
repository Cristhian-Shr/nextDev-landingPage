
import AboutSection from "./_components/about-section";
import { IntroSection } from "./_components/intro-section";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <IntroSection />
      <AboutSection />
    </main>
  );
}
