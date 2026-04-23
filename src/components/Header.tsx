"use client";

import { useState, useEffect } from "react";
import { ANNOUNCEMENTS, NAV } from "./constants";

export default function Header() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentAnnouncement((p) => (p + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const next = () => setCurrentAnnouncement((p) => (p + 1) % ANNOUNCEMENTS.length);
  const prev = () => setCurrentAnnouncement((p) => (p - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* ── TOP ANNOUNCEMENT BAR ── */}
      <div className="bg-[#524970] text-white px-4 py-2 flex items-center justify-between text-xs font-semibold tracking-wide min-h-[40px]">
        <div className="hidden lg:flex w-[150px]" />

        <div className="flex-1 flex items-center justify-center gap-3 text-center">
          <button suppressHydrationWarning onClick={prev} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors shrink-0" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <span className="leading-snug">
            {ANNOUNCEMENTS[currentAnnouncement].text}
            {ANNOUNCEMENTS[currentAnnouncement].linkText && (
              <a href={ANNOUNCEMENTS[currentAnnouncement].href} className="ml-1 underline underline-offset-2 hover:text-white/80">
                {ANNOUNCEMENTS[currentAnnouncement].linkText}
              </a>
            )}
          </span>
          <button suppressHydrationWarning onClick={next} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors shrink-0" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 w-[150px] justify-end text-[11px] font-bold tracking-widest">
          <span className="cursor-pointer hover:text-white/70 transition-colors">Login</span>
          <span className="text-white/30">|</span>
          <span className="cursor-pointer hover:text-white/70 transition-colors">ID</span>
          <span className="text-white/30">|</span>
          <span className="cursor-pointer hover:text-white/70 transition-colors">EN</span>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#efebf5] shadow-sm">
        <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src="/images/somethinc-logo.png" alt="Somethinc" className="h-9 md:h-11 w-auto object-contain" onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const next = el.nextElementSibling as HTMLElement | null;
              if (next) next.style.display = "flex";
            }} />
            <span className="hidden font-display font-bold text-xl tracking-widest text-[#3b3652]">SOMETHINC</span>
          </a>

          {/* Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-[14px] font-semibold text-[#353341] hover:text-[#7d57d8] transition-colors">{n.label}</a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button suppressHydrationWarning className="text-[#3b3652] hover:text-[#7d57d8] hover:scale-110 transition-all" aria-label="Search">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
            <button suppressHydrationWarning className="text-[#3b3652] hover:text-[#7d57d8] hover:scale-110 transition-all relative" aria-label="Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              <span className="absolute -top-1.5 -right-1.5 bg-[#f46d00] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full leading-none z-10">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
