"use client";

import Image, { type StaticImageData } from "next/image";
import logoSemnasti from "@/assets/Asset 12 1.png";

// Very simple marquee using a single example logo repeated
export default function PartnersSponsorsStrip() {
  const logos: LogoItem[] = Array.from({ length: 8 }, () => ({
    src: logoSemnasti,
    alt: "SEMNASTI",
  }));

  return (
    <section className="relative z-10 bg-[#0a0e27]/60 border-t border-b border-white/10 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-2xl font-semibold mb-6 text-white/80 tracking-wide font-stormfaze">
          Media Partners
        </div>
        <MarqueeSimple logos={logos} speed={24} direction="left" />

        <div className="text-center text-2xl font-semibold mt-10 mb-6 text-white/80 tracking-wide font-stormfaze">
          Sponsors
        </div>
        <MarqueeSimple logos={logos} speed={26} direction="right" />
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
