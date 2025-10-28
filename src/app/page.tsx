"use client";

import NavigationBar from "@/components/navigation-bar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import TeaserSection from "@/components/sections/teaser-section";
import GallerySection from "@/components/sections/gallery-section";
import SpeakerSection from "@/components/sections/speaker-section";
import TicketSection from "@/components/sections/ticket-section";
import BenefitsSection from "@/components/sections/benefits-section";
import InformationSection from "@/components/sections/information-section";
import FooterSection from "@/components/sections/footer-section";
import PartnersSponsorsStrip from "@/components/sections/partners-sponsors-strip";

export default function Home() {
  return (
    <div className="min-h-screen relative circuit-pattern pt-16 md:pt-20">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <TeaserSection />
      <GallerySection />
      <SpeakerSection />
      <TicketSection />
      <BenefitsSection />
      <InformationSection />
  <PartnersSponsorsStrip />
      <FooterSection />
    </div>
  );
}
