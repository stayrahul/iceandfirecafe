"use client";

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[85vh] sm:h-[100vh] min-h-[500px] sm:min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#2C1E16]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Ice & Fire Cafe Ambience" 
          fill
          sizes="100vw"
          className="object-cover opacity-50 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1E16]/70 via-transparent to-[#FDFBF7]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 mt-16 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#FDFBF7]/90 text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 sm:mb-6"
        >
          Welcome to
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-[#FDFBF7] mb-4 sm:mb-6 drop-shadow-lg leading-tight">
          Ice & Fire Cafe
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#FDFBF7]/90 max-w-2xl mb-8 sm:mb-12 font-light leading-relaxed drop-shadow-md px-4 sm:px-0"
        >
          Experience an exquisite culinary journey where bold spices meet comforting classics. Handcrafted daily in the heart of Simraungadh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <button
            onClick={() => {
              // Now we navigate to /menu since we have separate pages, or smooth scroll if on homepage
              window.location.href = '/menu';
            }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C84B31] text-[#FDFBF7] font-medium text-sm md:text-base tracking-widest uppercase transition-colors hover:bg-[#A63A24] shadow-lg flex items-center justify-center gap-3 rounded-sm"
          >
            Explore Menu
          </button>
          
          <button
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-[#FDFBF7] text-[#FDFBF7] font-medium text-sm md:text-base tracking-widest uppercase transition-colors hover:bg-[#FDFBF7] hover:text-[#2C1E16] flex items-center justify-center gap-3 rounded-sm"
          >
            Book a Table
          </button>
        </motion.div>
      </div>
    </section>
  );
}
