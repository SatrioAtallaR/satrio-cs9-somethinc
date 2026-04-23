"use client";

interface Props {
  onClose: () => void;
}

export default function StoreLocatorModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3b3652]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl md:rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="p-4 md:p-6 border-b border-[#efedf5] flex justify-between items-center bg-[#fcfbfe]">
          <h3 className="font-display font-bold text-[#3b3652] text-lg md:text-xl">Find Us</h3>
          <button onClick={onClose} aria-label="Close" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#efedf5] hover:bg-[#dfdaeb] text-[#605b72] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        {/* Online stores */}
        <div className="bg-white p-4 md:p-6 border-b border-[#efedf5]">
          <h4 className="font-bold text-xs tracking-wider uppercase text-[#9e98b3] mb-3">Official Online Stores</h4>
          <div className="flex flex-col rounded-xl overflow-hidden shadow-sm">
            <a href="https://www.tokopedia.com/somethinc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-[#42b549] hover:bg-[#389b3f] transition-all w-full">
              <div className="w-8 h-8 shrink-0 overflow-hidden rounded-md"><img src="/images/tokopedia.png" alt="Tokopedia" className="w-full h-full object-cover" /></div>
              <span className="font-bold text-white text-sm md:text-base">Tokopedia</span>
            </a>
            <a href="https://shopee.co.id/somethinc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-[#ee4d2d] hover:bg-[#d44326] transition-all w-full border-t border-[#d44326]/30">
              <div className="w-8 h-8 shrink-0 overflow-hidden rounded-md"><img src="/images/shopee.png" alt="Shopee" className="w-full h-full object-cover" /></div>
              <span className="font-bold text-white text-sm md:text-base">Shopee</span>
            </a>
            <a href="https://www.lazada.co.id/shop/somethinc-official/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-[#0f136d] hover:bg-[#0c0f56] transition-all w-full border-t border-[#0c0f56]/30">
              <div className="w-8 h-8 shrink-0 overflow-hidden rounded-md"><img src="/images/lazada.png" alt="Lazada" className="w-full h-full object-cover" /></div>
              <span className="font-bold text-white text-sm md:text-base">Lazada</span>
            </a>
          </div>
        </div>

        {/* Offline map */}
        <div className="bg-[#f0eef5] relative">
          <h4 className="absolute top-3 left-4 md:left-5 z-20 font-bold text-xs tracking-wider uppercase bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm text-[#3b3652]">Offline Stores (Java)</h4>
          <div className="w-full aspect-[21/9] bg-[#e6e2f1] relative overflow-hidden flex items-center justify-center">
            <img src="/images/java-map.png" alt="Java Map" className="w-full h-full object-cover absolute inset-0 z-0"
              onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden'); }} />

            <div className="hidden absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-6 bg-[#f5f3fa] text-[#605b72]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-3 text-[#9e98b3]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <p className="font-semibold text-[#3b3652] mb-1 text-sm">Map image missing</p>
              <code className="bg-white px-2 py-1 rounded text-xs font-mono text-[#7d57d8] border border-[#dfdaeb]">public/images/java-map.png</code>
            </div>

            {/* Map pins */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {[
                { top: '40%', left: '25%', label: 'Jowokarta', primary: true },
                { top: '55%', left: '32%', label: 'ITB', primary: false },
                { top: '45%', left: '55%', label: '$SIDO', primary: false },
                { top: '65%', left: '58%', label: 'Sebelah pria solo', primary: false },
              ].map((pin) => (
                <div key={pin.label} className="absolute flex flex-col items-center" style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -50%)' }}>
                  <div className={`${pin.primary ? 'w-5 h-5 bg-[#7d57d8] border-[3px] border-white shadow-[0_0_0_4px_rgba(125,87,216,0.2)] animate-pulse' : 'w-3.5 h-3.5 bg-[#4ceb70] border-2 border-white shadow-md'} rounded-full`} />
                  <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm border border-[#efedf5] text-[10px] font-bold text-[#605b72] mt-1.5 pointer-events-auto cursor-pointer hover:text-[#7d57d8] transition-colors whitespace-nowrap">
                    {pin.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
