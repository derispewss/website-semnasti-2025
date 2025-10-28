"use client";
import Link from 'next/link';

const tickets = [
  {
    title: "Early Bird",
    price: "Rp 40.000",
    desc: "Harga paling hemat, kuota sangat terbatas.",
    active: true,
  },
  {
    title: "Presale (Single)",
    price: "Rp 50.000",
    desc: "Pra-penjualan setelah Early Bird, stok terbatas.",
    active: false,
  },
  {
    title: "Presale (Bundling)",
    price: "Rp 145.000",
    desc: "Paket hemat untuk 3 tiket (bundling).",
    active: false,
  },
  {
    title: "Normal Price",
    price: "Rp 100.000",
    desc: "Harga reguler pada periode akhir penjualan.",
    active: false,
  },
];

export default function TicketSection() {
  const activeTickets = tickets.filter((t) => t.active);
  const activeTitleText =
    activeTickets.length === 1
      ? activeTickets[0].title
      : activeTickets.length > 1 && activeTickets.length <= 3
      ? activeTickets.map((t) => t.title).join(", ")
      : activeTickets.length > 3
      ? `${activeTickets.slice(0, 3).map((t) => t.title).join(", ")} +${
          activeTickets.length - 3
        } lainnya`
      : "";
  return (
    <section
      id="tiket"
      className="relative z-10 scroll-mt-24 px-6 py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 md:mb-10 font-akira">
          <span className="text-gradient-gray">DAFTAR TIKET</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {tickets.map((ticket, i) => (
            <div
              key={i}
              className={`relative rounded-2xl md:rounded-3xl p-5 md:p-7 border transition-all duration-300 hover:scale-[1.03] ${
                ticket.active
                  ? "border-white/20 bg-gradient-to-br from-[#17D3FD]/10 to-[#CD3DFF]/10 shadow-xl shadow-[#17D3FD]/15"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              }`}
            >
              <h3 className="text-base md:text-lg font-bold mb-3">
                {ticket.title}
              </h3>
              <div className="h-16 md:h-24 flex items-center justify-center mb-3 md:mb-4">
                <p
                  className={`text-xl md:text-2xl font-bold ${
                    ticket.active ? "text-gradient" : "text-white/70"
                  }`}
                >
                  {ticket.price}
                </p>
              </div>
              <p className="text-xs md:text-sm text-white/65 text-center mb-3 md:mb-4">
                {ticket.desc}
              </p>
              {/* Benefits moved to a separate section */}
              {ticket.active && (
                <Link href="/registration" className="w-full inline-flex items-center justify-center py-2.5 md:py-3 bg-gradient-to-r from-[#17D3FD] to-[#CD3DFF] rounded-full font-bold hover:opacity-90 transition-all shadow-lg text-sm md:text-base">
                  Pesan Tiket
                </Link>
              )}
            </div>
          ))}
        </div>

        {activeTickets.length > 0 && (
          <div className="text-center">
            <Link href="/registration" className="inline-block bg-gradient-to-r from-[#CD3DFF] to-[#17D3FD] rounded-2xl md:rounded-3xl p-[2px]">
              <div className="bg-[#1a0b2e] rounded-2xl md:rounded-3xl px-8 md:px-12 py-4 md:py-6 hover:bg-transparent transition-all duration-300 cursor-pointer group">
                <p className="font-bold text-base md:text-lg mb-2">Sedang Berlangsung</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-stormfaze text-gradient-gray group-hover:text-white transition-all">
                  {`Pendaftaran Tiket ${activeTitleText}`}
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
