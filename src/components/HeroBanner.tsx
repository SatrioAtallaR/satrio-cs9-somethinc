"use client";

export default function HeroBanner() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[550px] lg:h-[650px] overflow-hidden bg-[#decff6]">

      {/* Bigmo Panel */}
      <div className="relative flex-1 min-h-[350px] md:min-h-0 h-full overflow-hidden group cursor-pointer border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#faf9fc]">
        <img src="/images/Bigmo.png" alt="Bigmo"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

        {/* Default quote */}
        <div className="absolute inset-x-0 bottom-0 z-10 text-white text-center px-4 py-6 md:py-8 transition-opacity duration-300 group-hover:opacity-0">
          <p className="font-display italic font-semibold text-lg md:text-xl lg:text-2xl leading-snug drop-shadow-md">
            "Cleanser andalan selama di penjaruy"
          </p>
          <p className="mt-2 font-body font-bold text-[10px] md:text-xs tracking-widest uppercase text-white/90 drop-shadow-md">- Bigmuy</p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#7d57d8]/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center px-6 md:px-8 text-center z-20">
          <svg className="w-8 h-8 text-white/60 mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.293-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.293-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-white font-body text-sm md:text-base leading-relaxed">
            Selama di penjara, Bigmuy tetap rajin pakai <strong>Jelly Cleanser Somethinc</strong> setiap hari. Hasilnya? Wajahnya tetap bersih, pori-pori ga tersumbat, dan kulitnya sehat. Bahkan sesama penghuni blok sampai nanya produk apa yang dia pakai!
          </p>
          <p className="mt-4 text-white font-display font-bold text-xs md:text-sm tracking-widest uppercase">Bigmuy</p>
        </div>
      </div>

      {/* Center Panel */}
      <div className="relative flex-[1.2] min-h-[200px] md:min-h-0 h-full flex items-center justify-center overflow-hidden bg-[#decff6] border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#faf9fc]">
        <div className="absolute w-[80%] h-[80%] rounded-full bg-[#c4a8f0]/30 blur-3xl animate-float-slow pointer-events-none" />
        <h1
          className="relative z-10 w-full text-center px-2 animate-float animate-shimmer-text text-white font-display font-bold uppercase select-none cursor-default transition-[transform] duration-300"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 4.5rem)', letterSpacing: '0.05em', lineHeight: 1.1 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.parentElement!.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
            e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
          }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
        >
          Somethinc
        </h1>
      </div>

      {/* Timoti Panel */}
      <div className="relative flex-1 min-h-[350px] md:min-h-0 h-full overflow-hidden group cursor-pointer">
        <img src="/images/Timoti.png" alt="Timoti"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

        {/* Default quote */}
        <div className="absolute inset-x-0 bottom-0 z-10 text-white text-center px-4 py-6 md:py-8 transition-opacity duration-300 group-hover:opacity-0">
          <p className="font-display italic font-semibold text-lg md:text-xl lg:text-2xl leading-snug drop-shadow-md">
            "Bibir gw ga kering lagi"
          </p>
          <p className="mt-2 font-body font-bold text-[10px] md:text-xs tracking-widest uppercase text-white/90 drop-shadow-md">- Timuyti</p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#7d57d8]/85 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center px-6 md:px-8 text-center z-20">
          <svg className="w-8 h-8 text-white/60 mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.293-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.293-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-white font-body text-sm md:text-base leading-relaxed">
            Timuyti ngajar di <strong>Adakami Krito</strong> dari pagi sampai sore, tapi bibirnya selalu lembap dan warnanya tetap attractive. Rahasianya? <strong>Transferproof Lipstick Somethinc</strong> karena tahan lama dan nggak bikin kering!
          </p>
          <p className="mt-4 text-white font-display font-bold text-xs md:text-sm tracking-widest uppercase">Timuyti</p>
        </div>
      </div>

    </section>
  );
}
