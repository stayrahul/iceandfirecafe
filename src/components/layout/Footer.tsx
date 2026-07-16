import { BUSINESS_INFO } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF5A36]/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Info Section */}
        <div className="space-y-8 max-w-2xl mx-auto text-center md:text-left flex flex-col md:flex-row md:items-start justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-serif font-bold tracking-tight mb-2 flex items-center justify-center md:justify-start gap-2">
              Ice <span className="text-[#00E5FF]">&amp;</span> <span className="text-[#FF5A36]">Fire</span>
            </h2>
            <p className="text-white/60 text-lg font-light">Experience Authentic Flavors.</p>
          </div>
          
          <div className="space-y-4 flex-1">
            <div className="flex flex-col">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] to-[#00E5FF] text-xs font-bold uppercase tracking-[0.15em] mb-1">Location</span>
              <span className="text-white/90 font-medium">{BUSINESS_INFO.location}</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] to-[#00E5FF] text-xs font-bold uppercase tracking-[0.15em] mb-1">Call Us</span>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-white/90 hover:text-[#00E5FF] transition-colors font-medium">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="flex flex-col">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] to-[#00E5FF] text-xs font-bold uppercase tracking-[0.15em] mb-1">Hours</span>
              <span className="text-white/90 font-medium">{BUSINESS_INFO.hours}</span>
            </div>
            
            <div className="pt-4">
              <a 
                href={BUSINESS_INFO.social.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition-all font-bold text-sm tracking-wider uppercase w-full sm:w-auto"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm relative z-10">
        <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-serif italic text-white/30">Crafted with passion in Simraungadh.</p>
      </div>
    </footer>
  );
}
