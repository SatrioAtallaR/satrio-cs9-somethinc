"use client";

import { useState, useEffect } from "react";
import { PRODUCTS } from "./constants";

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % PRODUCTS.length), 7000);
    return () => clearInterval(t);
  }, []);

  const next = () => setCurrent((p) => (p + 1) % PRODUCTS.length);
  const prev = () => setCurrent((p) => (p - 1 + PRODUCTS.length) % PRODUCTS.length);

  const p = PRODUCTS[current];

  return (
    <section id="products" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14 reveal">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#3b3652]">
          Best Sellers
        </h2>
        <p className="mt-3 text-[#8a859e] text-base md:text-lg font-medium">Discover our most loved products</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Card */}
        <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.07)] border border-[#efedf5] overflow-hidden p-6 sm:p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12" style={{ minHeight: 'clamp(380px, 50vw, 500px)' }}>

          {/* Nav arrows */}
          <button suppressHydrationWarning onClick={prev} aria-label="Previous product"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-[#efedf5] text-[#3b3652] hover:bg-[#7d57d8] hover:text-white transition-all group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button suppressHydrationWarning onClick={next} aria-label="Next product"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-[#efedf5] text-[#3b3652] hover:bg-[#7d57d8] hover:text-white transition-all group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          {/* Product image */}
          <div className="w-full md:w-5/12 flex items-center justify-center relative shrink-0" key={`img-${current}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#decff6] to-[#ffd4df] rounded-full blur-[60px] opacity-50" />
            <div
              className="relative bg-contain bg-no-repeat bg-center mix-blend-multiply transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
              style={{
                backgroundImage: `url(/images/product-${p.id}.png)`,
                width: 'clamp(160px, 28vw, 300px)',
                height: 'clamp(160px, 28vw, 300px)',
              }}
            />
          </div>

          {/* Product info */}
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left" key={`info-${current}`}>
            <span className="inline-block px-3 py-1 rounded-full bg-[#f5f3fa] text-[#7d57d8] text-[10px] md:text-xs font-bold tracking-[0.18em] uppercase mb-4 border border-[#ebdffc]">
              {p.category}
            </span>
            <h3 className="font-display font-bold text-[#3b3652] leading-tight mb-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
              {p.name}
            </h3>
            <p className="text-[#605b72] leading-relaxed mb-6 font-medium max-w-xs md:max-w-sm" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.1rem)' }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span className="font-body font-bold text-[#7d57d8] tracking-tight" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                {p.price}
              </span>
              <button suppressHydrationWarning className="px-6 py-3 bg-gradient-to-r from-[#3b3652] to-[#7d57d8] hover:from-[#7d57d8] hover:to-[#9b72f0] text-white font-bold rounded-xl text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:shadow-[#7d57d8]/30 hover:-translate-y-1 active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-7">
          {PRODUCTS.map((_, i) => (
            <button
              suppressHydrationWarning
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Product ${i + 1}`}
              className={`transition-all duration-500 rounded-full ${current === i ? 'w-9 h-2.5 bg-[#7d57d8] shadow' : 'w-2.5 h-2.5 bg-[#dfdaeb] hover:bg-[#9e98b3]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
