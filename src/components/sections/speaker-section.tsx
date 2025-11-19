'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SPEAKERS, type Speaker } from './speakers.data';

export default function SpeakerSection() {
  return (
    <section id="pembicara" className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12 font-akira">
          <span className="text-gradient-gray">SPEAKER</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
          {SPEAKERS.map((spk: Speaker) => (
            <div key={spk.id} className="text-center group">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#17D3FD] to-[#CD3DFF] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#17D3FD]/20 to-[#CD3DFF]/20 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden group-hover:border-white/40 transition-all duration-300">
                  {spk.image ? (
                    <Image src={spk.image} alt={spk.name} className="w-full h-full object-cover object-center" />
                  ) : (
                    <div className="text-4xl md:text-5xl text-gradient select-none">
                      {spk.comingSoon ? '?' : spk.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold mb-1">
                {spk.comingSoon && !spk.isModerator ? 'Special Speaker!' : spk.name}
              </h3>
              <p className="text-[#17D3FD] mb-4 font-medium text-sm md:text-base">
                {spk.comingSoon && !spk.isModerator ? 'Coming Soon!' : [spk.title, spk.organization].filter(Boolean).join(' • ')}
              </p>
              <div className="bg-gradient-to-r from-[#CD3DFF]/20 to-[#17D3FD]/20 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                {spk.comingSoon && !spk.isModerator ? (
                  <p className="text-xs md:text-sm italic text-white/80">
                    Stay tuned for our amazing speakers announcement!
                  </p>
                ) : spk.isModerator ? (
                  <p className="text-xs md:text-sm italic text-white/80">
                    Moderator
                  </p>
                ) : (spk.linkedin || spk.youtube) ? (
                  <div className="flex flex-col gap-2">
                    {spk.linkedin && (
                      <Link
                        href={spk.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-[#17D3FD] hover:text-[#CD3DFF] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </Link>
                    )}
                    {spk.youtube && (
                      <Link
                        href={spk.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-[#17D3FD] hover:text-[#CD3DFF] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                      </Link>
                    )}
                  </div>
                ) : (
                  <p className="text-xs md:text-sm italic text-white/80">
                    Confirmed speaker
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
