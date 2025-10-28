'use client';

export default function SpeakerSection() {
  return (
    <section id="pembicara" className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 md:mb-12 font-akira">
          <span className="text-gradient-gray">SPEAKER</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
          {[1, 2].map((i) => (
            <div key={i} className="text-center group">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#17D3FD] to-[#CD3DFF] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-[#17D3FD]/20 to-[#CD3DFF]/20 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden group-hover:border-white/40 transition-all duration-300">
                  <div className="text-4xl md:text-5xl text-gradient">?</div>
                </div>
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2">Special Speaker!</h3>
              <p className="text-[#17D3FD] mb-4 font-medium text-sm md:text-base">Coming Soon...</p>
              <div className="bg-gradient-to-r from-[#CD3DFF]/20 to-[#17D3FD]/20 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                <p className="text-xs md:text-sm italic text-white/80">Stay tuned for our amazing speakers announcement!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
