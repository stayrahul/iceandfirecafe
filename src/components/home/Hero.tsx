"use client";

import { motion } from "motion/react";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      
      {/* Ambient Blobs */}
      <div className="blob-fire w-[40vw] h-[40vw] top-10 left-10 animate-pulse mix-blend-screen" />
      <div className="blob-ice w-[40vw] h-[40vw] bottom-10 right-10 animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/30 hidden sm:block"></span>
          <p className="text-[#FF5A36] font-medium tracking-[0.2em] uppercase text-sm sm:text-base">
            Est. 2024 • Simraungadh
          </p>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/30 hidden sm:block"></span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tighter leading-[0.9] mb-8"
        >
          Taste the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] via-[#FF8A65] to-[#00E5FF]">
            Contrast
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12"
        >
          Experience a fiery fusion of flavors and icy-cool refreshments in the heart of Nepal.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link 
            href="/menu"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#111111] font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Explore Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5A36] to-[#00E5FF] opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Link>
          
          <Link 
            href="/visit"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
          >
            Visit Us
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
