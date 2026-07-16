"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { MENU_ITEMS } from '../../lib/mockData';
import { cn } from '../../lib/utils';
import { Flame, Snowflake, Utensils, Cake } from 'lucide-react';

const CATEGORIES = [
  { id: 'ALL', label: 'All Items', icon: null },
  { id: 'HOT', label: 'Hot Drinks', icon: Flame },
  { id: 'COLD', label: 'Cold Drinks', icon: Snowflake },
  { id: 'FOOD', label: 'Food & Bites', icon: Utensils },
  { id: 'DESSERT', label: 'Desserts', icon: Cake },
];

export default function BentoMenu() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredItems = MENU_ITEMS.filter(
    item => activeCategory === 'ALL' || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen bg-transparent">
      <div className="flex flex-col items-center mb-10 sm:mb-16 space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C1E16] tracking-tight drop-shadow-sm">
          Our Curated Menu
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-[#C84B31] rounded-full"></div>
        
        {/* Filter Pills - Horizontally scrollable on mobile */}
        <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
          <div className="flex sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 w-max sm:w-auto mx-auto min-w-min">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 sm:px-6 py-2 sm:py-2.5 rounded-sm text-xs sm:text-sm font-medium transition-all flex items-center gap-2 tracking-wider uppercase border whitespace-nowrap",
                  activeCategory === category.id 
                    ? "bg-[#C84B31] text-[#FDFBF7] border-[#C84B31] shadow-md" 
                    : "bg-transparent text-[#2C1E16]/60 border-[#2C1E16]/20 hover:text-[#2C1E16] hover:border-[#2C1E16]"
                )}
              >
                {category.icon && <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              className={cn(
                "group relative bg-white flex flex-col overflow-hidden shadow-[0_4px_20px_-4px_rgba(44,30,22,0.08)] hover:shadow-[0_12px_30px_-5px_rgba(200,75,49,0.15)] transition-all duration-300 rounded-lg sm:rounded-xl border border-[#2C1E16]/5",
                // Make the first item larger in masonry-like flow on large screens
                index === 0 && activeCategory === 'ALL' ? "lg:col-span-2 lg:row-span-2" : ""
              )}
            >
              <Link href={`/menu/${item.id}`} className="absolute inset-0 z-20" />
              
              <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-[#FDFBF7]">
                <Image 
                  src={item.imagePlaceholder} 
                  alt={item.name} 
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {item.isSpicy && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#C84B31] text-white p-1.5 sm:p-2 rounded-full shadow-lg transform group-hover:-rotate-12 transition-transform duration-300" title="Spicy">
                    <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                )}
              </div>
              
              <div className="p-3 sm:p-5 lg:p-6 flex flex-col flex-1 relative z-10 bg-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 sm:mb-3 gap-1 sm:gap-4">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-serif font-bold text-[#2C1E16] leading-tight group-hover:text-[#C84B31] transition-colors">{item.name}</h3>
                  <span className="text-[#C84B31] font-bold shrink-0 text-xs sm:text-base bg-[#FDFBF7] sm:bg-transparent px-2 py-0.5 sm:p-0 rounded-sm sm:rounded-none inline-block w-fit mt-1 sm:mt-0">Rs. {item.priceNPR}</span>
                </div>
                <div className="w-full border-b border-dashed border-[#2C1E16]/10 my-2 hidden lg:block opacity-50"></div>
                <p className="text-[#2C1E16]/60 text-[10px] sm:text-sm leading-relaxed mt-1 line-clamp-2 sm:line-clamp-3">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
