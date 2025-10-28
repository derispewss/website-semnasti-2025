'use client';

import Image from 'next/image';
import brainLogo from '@/assets/brain.png';

export default function FooterSection() {
  return (
    <footer className="relative z-10 bg-[#0a0e27]/90 backdrop-blur-md border-t border-white/10 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src={brainLogo} alt="Semnasti" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl font-stormfaze text-gradient-brand">SEMNASTI 2025</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Smart Living With AI<br />
              Real Tech For Real Life
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#beranda" className="hover:text-[#17D3FD] transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-[#17D3FD] transition-colors">Tentang</a></li>
              <li><a href="#pembicara" className="hover:text-[#17D3FD] transition-colors">Pembicara</a></li>
              <li><a href="#tiket" className="hover:text-[#17D3FD] transition-colors">Tiket</a></li>
              <li><a href="#informasi" className="hover:text-[#17D3FD] transition-colors">Informasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Email: semnasti.hmti.udinus.com<br />
              Instagram: @semnasti<br />
              Contact: +62 812-3456-7890
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2025 SEMNASTI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
