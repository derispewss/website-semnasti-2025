"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import brainLogo from "@/assets/brain.png";
import logoAorus from "@/assets/logo-aorus.png";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Tiket", href: "#tiket" },
    { label: "Informasi", href: "#informasi" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Left: brand (brain icon + SEMNASTI + x + AORUS) */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
            <Image
              src={brainLogo}
              alt="Semnasti Logo"
              width={48}
              height={48}
              className="w-auto h-full object-contain"
              priority
            />
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm md:text-xl font-bold font-stormfaze text-gradient-brand leading-none">
              SEMNASTI
            </span>
            <span className="text-white/80 font-medium uppercase text-sm md:text-base leading-none font-stormfaze">
              x
            </span>
            <div className="flex items-center h-6 sm:h-8 md:h-5 lg:h-7">
              <Image
                src={logoAorus}
                alt="AORUS Logo"
                width={180}
                height={48}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Right: nav + actions */}
        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4 md:gap-6 text-sm font-semibold">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#17D3FD] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/registration"
              className="bg-gradient-to-r from-[#17D3FD] to-[#CD3DFF] hover:opacity-90 px-5 md:px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105"
            >
              DAFTAR
            </Link>
            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-md border border-white/10 hover:border-white/30"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#0a0e27]/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2 text-sm">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 px-2 rounded-md hover:bg-white/5 font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
