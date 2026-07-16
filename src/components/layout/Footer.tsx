import { BUSINESS_INFO } from '../../lib/constants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2C1E16] text-[#FDFBF7] border-t border-[#C84B31]/20 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C84B31]/40 to-transparent"></div>
      
      {/* Decorative massive background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none flex justify-center">
        <h1 className="text-[12rem] md:text-[20rem] font-serif font-bold whitespace-nowrap leading-none tracking-tighter">
          ICE & FIRE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-serif font-bold tracking-tight mb-4 text-[#FDFBF7]">
              Ice <span className="font-light italic text-[#C84B31]">&amp;</span> Fire<br/>Cafe
            </h2>
            <p className="text-[#FDFBF7]/60 text-base font-light leading-relaxed max-w-sm">
              Experience an exquisite culinary journey where bold spices meet comforting classics.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <span className="text-[#C84B31] text-xs font-bold uppercase tracking-[0.2em] mb-2">Find Us</span>
            <span className="text-[#FDFBF7]/80 font-medium leading-relaxed max-w-[200px]">{BUSINESS_INFO.location}</span>
          </div>
          
          <div className="flex flex-col space-y-4">
            <span className="text-[#C84B31] text-xs font-bold uppercase tracking-[0.2em] mb-2">Contact</span>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-[#FDFBF7]/80 hover:text-[#C84B31] transition-colors font-medium w-fit">
              {BUSINESS_INFO.phone}
            </a>
            <span className="text-[#FDFBF7]/80 font-medium">{BUSINESS_INFO.hours}</span>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-[#C84B31] text-xs font-bold uppercase tracking-[0.2em] mb-2">Connect</span>
            <a 
              href={BUSINESS_INFO.social.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-[#FDFBF7]/20 text-[#FDFBF7]/90 hover:bg-[#FDFBF7] hover:text-[#2C1E16] transition-all duration-300 font-bold text-sm tracking-widest uppercase w-fit hover:scale-105 active:scale-95 shadow-lg"
            >
              Follow on Facebook
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 mb-16 border-t border-[#FDFBF7]/10 pt-10">
          <Link href="/menu" className="text-xs font-bold text-[#FDFBF7]/60 hover:text-[#C84B31] transition-colors uppercase tracking-widest">Menu</Link>
          <Link href="/about" className="text-xs font-bold text-[#FDFBF7]/60 hover:text-[#C84B31] transition-colors uppercase tracking-widest">Our Story</Link>
          <Link href="/visit" className="text-xs font-bold text-[#FDFBF7]/60 hover:text-[#C84B31] transition-colors uppercase tracking-widest">Visit Us</Link>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[#FDFBF7]/40 text-xs tracking-widest uppercase relative z-10 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="font-serif italic capitalize tracking-normal text-sm opacity-60">Crafted with passion in Simraungadh.</p>
        </div>
      </div>
    </footer>
  );
}
