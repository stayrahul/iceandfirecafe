"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BUSINESS_INFO } from '../../lib/constants';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FDFBF7] opacity-50 skew-y-3 transform origin-top-left -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white bg-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
                alt="Inside Ice & Fire Cafe" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C84B31] rounded-full blur-3xl opacity-20 -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2C1E16] rounded-full blur-2xl opacity-10 -z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col space-y-6"
          >
            <div className="inline-block w-fit bg-[#C84B31]/10 text-[#C84B31] font-bold px-4 py-1 rounded-full text-sm tracking-wide">
              OUR STORY
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2C1E16] leading-tight">
              A Taste of Fire & Ice in <span className="text-[#C84B31]">Simraungadh</span>
            </h2>
            
            <p className="text-[#2C1E16]/70 text-lg leading-relaxed">
              Welcome to <strong className="text-[#2C1E16]">{BUSINESS_INFO.name}</strong>, where community meets culinary delight. Born out of a passion for great flavors, we are proud to serve the vibrant town of Simraungadh with an unforgettable cafe experience.
            </p>
            
            <p className="text-[#2C1E16]/70 text-lg leading-relaxed">
              Whether you're craving our famous, fiery Volcano Spicy Mo:Mo, a comforting bowl of Chowmein, a towering Burger, or simply a refreshing cup of Coffee and Tea, we have something to satisfy every craving. 
            </p>
            
            <p className="text-[#2C1E16]/70 text-lg leading-relaxed">
              Don't forget to save room for dessert! From traditional Indian and Nepali sweets to decadent Custom Birthday Cakes, we believe every visit should end on a sweet note.
            </p>
            
            <div className="pt-4 flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-[#C84B31]">50+</span>
                <span className="text-sm text-[#2C1E16]/60 font-bold uppercase tracking-wider">Menu Items</span>
              </div>
              <div className="w-px h-12 bg-[#2C1E16]/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-[#C84B31]">100%</span>
                <span className="text-sm text-[#2C1E16]/60 font-bold uppercase tracking-wider">Fresh Quality</span>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
