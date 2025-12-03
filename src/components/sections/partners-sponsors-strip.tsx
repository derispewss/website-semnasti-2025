"use client";

import Image, { type StaticImageData } from "next/image";

// Import your logo media here
import logoPartner1 from "@/assets/media-partner/1000384469 1.png";
import logoPartner2 from "@/assets/media-partner/Copy of LOGO 1.png";
import logoPartner3 from "@/assets/media-partner/HMTI FTS UMP 1.png";
import logoPartner4 from "@/assets/media-partner/LOGO HMIF UMM 1.png";
import logoPartner5 from "@/assets/media-partner/Logo (Dengan teks) 1.png";
import logoPartner6 from "@/assets/media-partner/Logo HMIF UNSIQ 1.png";
import logoPartner7 from "@/assets/media-partner/Logo OmahTI (white) 1.png";
import logoPartner8 from "@/assets/media-partner/logo HMDTI 1.png";
import logoPartner9 from "@/assets/media-partner/BEM-FIK 1.png";
import logoPartner10 from "@/assets/media-partner/IMG_0982 1.png";
import logoPartner11 from "@/assets/media-partner/logo dncc 1.png";

// Import your sponsor logos here
import logoSponsor1 from "@/assets/sponsor/IDCloudHost-Logo-vertivcal-03 3 (1).png";
import logoSponsor2 from "@/assets/sponsor/Logo Seminar Kit 1 (1).png";
import logoSponsor3 from "@/assets/sponsor/Bank_x0020_Jateng_x0020_Logo.cdr.png";
import logoSponsor4 from "@/assets/sponsor/LOGO DOKTER LAPTOP SPONSOR UDINUS_page-0001 1.png";
import logoSponsor5 from "@/assets/sponsor/Salinan Dicoding Logo - White 3.png";
import logoSponsor6 from "@/assets/sponsor/WhatsApp Image 2025-12-02 at 17.34.12_899613dc 1.png";
import logoSponsor7 from "@/assets/sponsor/logo clowor bulet merah 2.png";
import logoSponsor8 from "@/assets/sponsor/download 2.png";

const mediaPartnerLogos: LogoItem[] = [
  { src: logoPartner1, alt: "Media Partner 1" },
  { src: logoPartner2, alt: "Media Partner 2" },
  { src: logoPartner3, alt: "Media Partner 3" },
  { src: logoPartner4, alt: "Media Partner 4" },
  { src: logoPartner5, alt: "Media Partner 5" },
  { src: logoPartner6, alt: "Media Partner 6" },
  { src: logoPartner7, alt: "Media Partner 7" },
  { src: logoPartner8, alt: "Media Partner 8" },
  { src: logoPartner9, alt: "Media Partner 9" },
  { src: logoPartner10, alt: "Media Partner 10" },
  { src: logoPartner11, alt: "Media Partner 11" },
];

const sponsorLogos: LogoItem[] = [
  { src: logoSponsor1, alt: "Sponsor 1" },
  { src: logoSponsor2, alt: "Sponsor 2" },
  { src: logoSponsor3, alt: "Sponsor 3" },
  { src: logoSponsor4, alt: "Sponsor 4" },
  { src: logoSponsor5, alt: "Sponsor 5" },
  { src: logoSponsor6, alt: "Sponsor 6" },
  { src: logoSponsor7, alt: "Sponsor 7" },
  { src: logoSponsor8, alt: "Sponsor 8" },
];

export default function PartnersSponsorsStrip() {
  return (
    <section className="relative z-10 bg-[#0a0e27]/60 border-t border-b border-white/10 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-2xl font-semibold mb-6 text-white/80 tracking-wide font-stormfaze">
          Media Partners
        </div>
        <MarqueeSimple logos={mediaPartnerLogos} speed={24} direction="left" />

        <div className="text-center text-2xl font-semibold mt-10 mb-6 text-white/80 tracking-wide font-stormfaze">
          Sponsors
        </div>
        <MarqueeSimple logos={sponsorLogos} speed={26} direction="right" />
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

type LogoItem = { src: StaticImageData; alt: string };

function MarqueeSimple({ logos, speed = 24, direction = "left" }: { logos: LogoItem[]; speed?: number; direction?: "left" | "right" }) {
  const items = [...logos, ...logos]; // duplicate for seamless loop
  const anim = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex items-center gap-8 will-change-transform"
        style={{ width: "200%", animation: `${anim} ${speed}s linear infinite` }}
      >
        {items.map((logo, idx) => (
          <div key={idx} className="shrink-0 opacity-95">
            <Image src={logo.src} alt={logo.alt} height={44} style={{ width: "auto" }} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
