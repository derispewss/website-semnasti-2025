"use client";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-akira">
          <span className="text-gradient-gray">TENTANG SEMNASTI?</span>
        </h2>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-2xl">
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            Perkembangan teknologi digital membawa berbagai manfaat bagi
            masyarakat. Namun, banyak pihak di Indonesia belum memiliki
            pemahaman yang mendalam dan keterampilan teknis untuk merancang,
            mengembangkan, dan mengimplementasikan sistem keamanan siber yang
            efektif. Keterbatasan sumber daya manusia yang ahli di bidang ini
            menjadi hambatan utama dalam memaksimalkan pertahanan negara
            terhadap serangan siber yang semakin meningkat. Melalui topik ini,
            peserta diharapkan memperoleh pengetahuan tentang tantangan keamanan
            siber yang dihadapi Indonesia serta strategi dan teknologi yang
            dapat diterapkan untuk memperkuat pertahanan digital di
            berbagai sektor industri.
          </p>
        </div>
      </div>
    </section>
  );
}
