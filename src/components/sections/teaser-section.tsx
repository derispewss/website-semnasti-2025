"use client";

type Props = { videoId?: string };

export default function TeaserSection({ videoId = "Ir_H9BCh43c" }: Props) {
  return (
    <section id="teaser" className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-akira">
          <span className="text-gradient-gray">TEASER</span>
        </h2>
        <div className="mt-8 md:mt-12 aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#17D3FD]/10 to-[#CD3DFF]/10 shadow-xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
