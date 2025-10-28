"use client";

export default function TeaserSection() {
  return (
    <section id="teaser" className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-akira">
          <span className="text-gradient-gray">TEASER</span>
        </h2>
        <div className="mt-8 md:mt-12 aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#17D3FD]/10 to-[#CD3DFF]/10 shadow-xl">
          <div className="w-full h-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
            <p className="text-lg md:text-xl lg:text-2xl text-white/50">Video Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
