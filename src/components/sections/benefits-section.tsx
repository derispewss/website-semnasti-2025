'use client';

import type { IconType } from 'react-icons';
import { FaBoxOpen, FaCoffee, FaUtensils, FaCertificate, FaGift } from 'react-icons/fa';

const benefits: { label: string; Icon: IconType }[] = [
  { label: 'Seminar Kit', Icon: FaBoxOpen },
  { label: 'Snack', Icon: FaCoffee },
  { label: 'Makan Siang', Icon: FaUtensils },
  { label: 'E-Certificate', Icon: FaCertificate },
  { label: 'Doorprize', Icon: FaGift },
];

export default function BenefitsSection() {
  return (
    <section id="benefit" className="relative z-10 scroll-mt-24 px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-akira">
          <span className="text-gradient-gray">BENEFIT TIKET</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {benefits.map(({ label, Icon }, idx) => (
            <div
              key={idx}
              className="group rounded-2xl md:rounded-3xl p-[2px] bg-gradient-to-r from-[#17D3FD] to-[#CD3DFF]"
            >
              <div className="h-full w-full rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 px-4 py-4 md:px-5 md:py-6 flex items-center gap-3 md:gap-4 hover:bg-white/10 transition-colors">
                <span className="inline-flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#17D3FD] to-[#CD3DFF] text-white shadow-md">
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                </span>
                <span className="text-sm md:text-base font-semibold text-white/90">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
