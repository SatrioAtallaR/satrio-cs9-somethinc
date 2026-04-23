"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductCarousel from "@/components/ProductCarousel";
import QuickActions from "@/components/QuickActions";
import SiteFooter from "@/components/SiteFooter";
import StoreLocatorModal from "@/components/StoreLocatorModal";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen bg-[#faf9fc] text-[#2d2b38] font-body flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroBanner />
        <ProductCarousel />
      </main>
      <QuickActions onOpenMap={() => setIsMapModalOpen(true)} />
      <SiteFooter onOpenMap={() => setIsMapModalOpen(true)} />
      {isMapModalOpen && <StoreLocatorModal onClose={() => setIsMapModalOpen(false)} />}
    </div>
  );
}
