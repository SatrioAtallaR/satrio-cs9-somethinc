"use client";

import { QUICK_ACTIONS } from "./constants";

interface Props {
  onOpenMap: () => void;
}

export default function QuickActions({ onOpenMap }: Props) {
  return (
    <div className="border-b border-[#efebf5] bg-[#fcfbfe] relative z-40">
      <div className="mx-auto flex flex-col sm:flex-row max-w-[1480px] divide-y sm:divide-y-0 sm:divide-x divide-[#efebf5]">
        {QUICK_ACTIONS.map((item) => (
          <div
            key={item.title}
            className="relative flex-1 p-6 sm:p-8 lg:p-12 hover:bg-[#f8f6fe] transition-all duration-300 group text-center sm:text-left cursor-pointer"
          >
            <div onClick={() => { if (item.title === "Store Locator") onOpenMap(); }}>
              <h3 className="font-display font-bold text-lg md:text-xl lg:text-2xl text-[#3b3652] group-hover:text-[#7d57d8] transition-colors mb-1 inline-flex items-center gap-2">
                {item.title}
                {item.title === "Store Locator" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180 text-[#9e98b3] group-hover:text-[#7d57d8]"><polyline points="6 9 12 15 18 9" /></svg>
                )}
              </h3>
              <p className="text-[#757088] text-sm">{item.desc}</p>
            </div>

            {/* Store Locator Dropdown */}
            {item.title === "Store Locator" && (
              <div className="absolute top-full left-0 mt-0 w-full sm:w-[110%] lg:w-full bg-white border border-[#efedf5] shadow-2xl rounded-b-2xl sm:rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4 sm:p-5 sm:mt-3 transform translate-y-2 group-hover:translate-y-0 text-left">
                <h4 className="font-bold text-[10px] tracking-widest uppercase text-[#9e98b3] mb-2">Official Online Stores</h4>
                <div className="flex flex-col rounded-xl overflow-hidden shadow-sm mb-4">
                  <a href="https://www.tokopedia.com/somethinc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 bg-[#42b549] hover:bg-[#389b3f] transition-all w-full">
                    <div className="w-7 h-7 shrink-0 overflow-hidden rounded-md"><img src="/images/tokopedia.png" alt="Tokopedia" className="w-full h-full object-cover" /></div>
                    <span className="font-bold text-white text-sm">Tokopedia</span>
                  </a>
                  <a href="https://shopee.co.id/somethinc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 bg-[#ee4d2d] hover:bg-[#d44326] transition-all w-full border-t border-[#d44326]/30">
                    <div className="w-7 h-7 shrink-0 overflow-hidden rounded-md"><img src="/images/shopee.png" alt="Shopee" className="w-full h-full object-cover" /></div>
                    <span className="font-bold text-white text-sm">Shopee</span>
                  </a>
                  <a href="https://www.lazada.co.id/shop/somethinc-official/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 bg-[#0f136d] hover:bg-[#0c0f56] transition-all w-full border-t border-[#0c0f56]/30">
                    <div className="w-7 h-7 shrink-0 overflow-hidden rounded-md"><img src="/images/lazada.png" alt="Lazada" className="w-full h-full object-cover" /></div>
                    <span className="font-bold text-white text-sm">Lazada</span>
                  </a>
                </div>
                <h4 className="font-bold text-[10px] tracking-widest uppercase text-[#9e98b3] mb-2">Offline Stores</h4>
                <button onClick={(e) => { e.stopPropagation(); onOpenMap(); }} className="w-full flex items-center justify-center gap-2 bg-[#f4f2f9] hover:bg-[#7d57d8] text-[#605b72] hover:text-white py-2.5 rounded-xl font-bold text-sm transition-colors shadow-sm">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  View Map Locator
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
