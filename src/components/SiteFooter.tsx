"use client";

interface Props {
  onOpenMap: () => void;
}

export default function SiteFooter({ onOpenMap }: Props) {
  return (
    <footer id="contact" className="bg-white border-t border-[#efebf5] mt-auto">
      {/* Main footer links */}
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">

        {/* Newsletter */}
        <div className="sm:col-span-2 text-center sm:text-left">
          <h3 className="font-display font-bold text-xl md:text-2xl text-[#3b3652] mb-3">Let's connect!</h3>
          <p className="text-[#605b72] mb-6 text-sm leading-relaxed lg:pr-8">
            Subscribe to get 15% off your first order, plus updates on new launches, skincare tips, and more.
          </p>
          <div className="flex max-w-sm mx-auto sm:mx-0 rounded-xl overflow-hidden border border-[#dfdaeb] focus-within:border-[#7d57d8] transition-colors shadow-sm bg-[#fcfbfe]">
            <input type="email" placeholder="Your email address" className="flex-1 bg-transparent px-4 py-3 outline-none text-sm placeholder:text-[#a09cae] min-w-0" />
            <button className="bg-[#7d57d8] text-white px-5 font-bold hover:bg-[#6b4bc2] transition-colors text-sm uppercase tracking-wider shrink-0">Join</button>
          </div>
        </div>

        {/* Info */}
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-[11px] tracking-[0.1em] uppercase text-[#9e98b3] mb-4">Info</h4>
          <ul className="space-y-3 text-[13px] text-[#3b3652]">
            {["Contact Us", "Become Our Reseller", "Market Place", "Join Us"].map(l => (
              <li key={l}><a href="#" className="hover:text-[#7d57d8] transition-colors">{l}</a></li>
            ))}
            <li>
              <button onClick={onOpenMap} className="hover:text-[#7d57d8] transition-colors">Store Locator</button>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-[11px] tracking-[0.1em] uppercase text-[#9e98b3] mb-4">Account</h4>
          <ul className="space-y-3 text-[13px] text-[#3b3652]">
            {["FAQ, Shipping, & Delivery", "Track Order", "Terms & Conditions", "Privacy Policy"].map(l => (
              <li key={l}><a href="#" className="hover:text-[#7d57d8] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-[11px] tracking-[0.1em] uppercase text-[#9e98b3] mb-4">Contact Us</h4>
          <ul className="space-y-4 text-[13px] text-[#3b3652]">
            <li>
              <span className="block font-bold text-[#7d57d8] mb-0.5 text-[10px] tracking-[0.1em] uppercase">WhatsApp</span>
              <span className="font-medium hover:text-[#7d57d8] transition-colors cursor-pointer">(+62) 666-666-666</span>
            </li>
            <li>
              <span className="block font-bold text-[#7d57d8] mb-0.5 text-[10px] tracking-[0.1em] uppercase">Email</span>
              <span className="font-medium hover:text-[#7d57d8] transition-colors cursor-pointer break-all">gwHonestBang@beautyhaul.Buming</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#efebf5] bg-[#fcfbfe]">
        <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8a859e] text-[12px] font-medium tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} PT Mulyo Nosubi Antonius. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className="relative group w-10 h-10 rounded-full border-[1.5px] border-[#4ceb70] text-[#4ceb70] flex items-center justify-center hover:bg-[#4ceb70] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#4ceb70]/30 transition-all bg-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="relative group w-10 h-10 rounded-full border-[1.5px] border-[#9f94ba] text-[#9f94ba] flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent hover:text-white hover:scale-110 hover:shadow-lg transition-all bg-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" aria-label="Twitter" className="relative group w-10 h-10 rounded-full border-[1.5px] border-[#9f94ba] text-[#9f94ba] flex items-center justify-center hover:bg-black hover:border-black hover:text-white hover:scale-110 hover:shadow-lg transition-all bg-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
