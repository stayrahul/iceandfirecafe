"use client";

import { motion } from "motion/react";
import { BUSINESS_INFO } from "../../lib/constants";
import { MapPin, Clock, Phone } from "lucide-react";

export default function VisitSection() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00E5FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5A36]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-white/20"></span>
            <span className="text-[#00E5FF] font-bold tracking-[0.2em] uppercase text-sm">Experience It</span>
            <span className="h-[1px] w-8 bg-white/20"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Visit Our Cafe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed font-light"
          >
            Whether you're craving our famous spicy Mo:Mo or a perfectly brewed espresso, our doors are open. Find us in the heart of Simraungadh.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 flex flex-col items-center text-center rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF5A36]/20 to-transparent flex items-center justify-center mb-6 border border-[#FF5A36]/20 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7 text-[#FF5A36]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Location</h3>
            <p className="text-white/60 font-medium">{BUSINESS_INFO.location}</p>
          </motion.div>

          {/* Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-10 flex flex-col items-center text-center rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-transparent flex items-center justify-center mb-6 border border-[#00E5FF]/20 group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7 text-[#00E5FF]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Hours</h3>
            <p className="text-white/60 font-medium whitespace-pre-line leading-relaxed">{BUSINESS_INFO.hours.replace(' - ', '\n')}</p>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-10 flex flex-col items-center text-center rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF5A36]/20 to-transparent flex items-center justify-center mb-6 border border-[#FF5A36]/20 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-[#FF5A36]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Contact</h3>
            <p className="text-white/60 font-medium mb-1">Call for takeout & delivery</p>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-lg font-bold text-[#FF5A36] hover:text-white transition-colors">
              {BUSINESS_INFO.phone}
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
