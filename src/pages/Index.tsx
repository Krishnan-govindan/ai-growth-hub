import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { VenturesSection } from "@/components/VenturesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WhyWorkSection } from "@/components/WhyWorkSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <VenturesSection />
      <SkillsSection />
      <WhyWorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
