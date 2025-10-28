'use client';

import Image, { type StaticImageData } from 'next/image';
import gallery1 from '@/assets/gallery/semansti.webp';

export default function GallerySection() {
  const images: (StaticImageData | string)[] = [
    gallery1,
  ];

  return (
    <section className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-akira">
          <span className="text-gradient-gray">GALLERY</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#17D3FD]/10 to-[#CD3DFF]/10 hover:border-white/30 transition-all duration-300 group"
            >
              <Image
                src={img}
                alt={`Gallery ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
