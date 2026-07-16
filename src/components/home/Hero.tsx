"use client";

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const BACKGROUNDS = [
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#2C1E16]">
      {/* Background Images with Crossfade and Zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.7, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image 
              src={BACKGROUNDS[currentIndex]} 
              alt="Ice & Fire Cafe Ambience" 
              fill
              sizes="100vw"
              priority={currentIndex === 0}
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlays for readability and blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1E16]/80 via-[#2C1E16]/40 to-[#FDFBF7]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(44,30,22,0.6)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[#FDFBF7]/80 text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#C84B31]" />
            Welcome to
            <span className="w-12 h-[1px] bg-[#C84B31]" />
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-bold text-[#FDFBF7] mb-6 drop-shadow-xl leading-[1.1]">
            Ice <span className="font-light italic text-[#C84B31]">&amp;</span> Fire<br/>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem]">Cafe</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FDFBF7]/90 max-w-2xl mb-12 font-light leading-relaxed drop-shadow-md">
            Experience an exquisite culinary journey where bold spices meet comforting classics. Handcrafted daily in the heart of Simraungadh.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link
              href="/menu"
              className="w-full sm:w-auto px-10 py-4 bg-[#C84B31] text-[#FDFBF7] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#A63A24] hover:shadow-[0_0_30px_rgba(200,75,49,0.6)] hover:scale-105 active:scale-95 flex items-center justify-center rounded-full group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">Explore Menu <span className="group-hover:translate-x-1 transition-transform">→</span></span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
            
            <Link
              href="/visit"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-[#FDFBF7] text-[#FDFBF7] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#FDFBF7] hover:text-[#2C1E16] hover:scale-105 active:scale-95 flex items-center justify-center rounded-full backdrop-blur-sm shadow-[0_0_15px_rgba(253,251,247,0.1)]"
            >
              Book a Table
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[#2C1E16] text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#2C1E16]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
