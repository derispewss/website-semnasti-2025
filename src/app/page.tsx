'use client';


import CountdownTimer from '@/components/countdown-timer';
import NavigationBar from '@/components/navigation-bar';
import Image from 'next/image';

// logos importing
import asiaLogo from '@/assets/ASIA RANKED 1.png';
import akreditasiLogo from '@/assets/AkreditasiUnggul 2.png';
import dinusLogo from '@/assets/LOGO-UDINUS 1.png';
import semnasLogo from '@/assets/Asset 12 1.png';
import hmtiLogo from '@/assets/Rectangle.png';

// image importing
import brainImages from '@/assets/brain.png';
import { FaCode } from 'react-icons/fa';

const logoStock = [asiaLogo, akreditasiLogo, dinusLogo, semnasLogo, hmtiLogo]

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      <NavigationBar />
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-12 pb-20 text-center" >
        <div className="flex flex-wrap items-center justify-center mb-6">
          {/* {logoStock.map((data, i) => (
            <div
              key={i}
            >
              <div className='h-10 object-center object-fill'>
                {data ? <Image src={data} alt="" className='h-full object-center object-contain'/> : null}
              </div>
            </div>
          ))} */}
        </div>


        <p className="text-blue-400 rounded-md font-medium lowercase py-2 px-4 text-xs bg-blue-100 flex gap-2 items-center whitespace-nowrap">
          <FaCode /> SEMINAR NASIONAL TEKNIK INFORMATIKA
        </p>
        <h1 className="text-4xl md:text-8xl font-extrabold mt-4">
          <span className="title bg-gradient-to-b from-white from-60% to-gray-900 bg-clip-text text-transparent">
            SEMNASTI 2025
          </span>
        </h1>
        <p className="text-blue-200">
          Smart Living With AI • Real Tech For Real Life
        </p>
        <p className="text max-w-2xl mx-auto text-center opacity-90 mt-8">
          Membangun Masa Depan Dengan Menembus Batas, Berinovasi Dengan AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-2 items-center whitespace-nowrap">
          <button className="px-6 py-3 text-sm flex-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 font-medium">
            DAFTAR SEKARANG
          </button>
          <button className="px-6 py-3 text-sm flex-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 font-medium">
            LIHAT JADWAL
          </button>
        </div>
        <CountdownTimer />
        
      </main>

      <footer className="relative z-10 border-t border-white/10 mt-12 py-4 text-center text-sm opacity-70">
        © 2025 SEMNASTI. All rights reserved.
      </footer>
    </div>
  );
}