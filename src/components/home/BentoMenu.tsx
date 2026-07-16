"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS } from "../../lib/mockData";
import { cn } from "../../lib/utils";

// Group items by category
const CATEGORIES = {
  'MOMO & CHOWMEIN': MENU_ITEMS.filter(item => item.category === 'MOMO' || item.category === 'CHOWMEIN'),
  'BURGERS': MENU_ITEMS.filter(item => item.category === 'BURGER'),
  'HOT BEVERAGES': MENU_ITEMS.filter(item => item.category === 'TEA' || item.category === 'COFFEE'),
  'DESSERTS': MENU_ITEMS.filter(item => item.category === 'DESSERT' || item.category === 'CAKE'),
};

export default function BentoMenu() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-[#111111] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-r from-[#FF5A36]/5 to-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6"
        >
          Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#FF5A36]">Selection</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-lg max-w-2xl mx-auto font-light"
        >
          Explore our handcrafted menu featuring the finest local ingredients and authentic recipes.
        </motion.p>
      </div>

      <div className="space-y-24 relative z-10">
        {Object.entries(CATEGORIES).map(([categoryName, items], categoryIdx) => (
          <div key={categoryName}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4 mb-8"
            >
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{categoryName}</h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[320px]"
            >
              {items.map((item, idx) => {
                const isLarge = idx === 0 && (categoryName === 'DESSERTS' || categoryName === 'MOMO & CHOWMEIN');
                
                return (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className={cn(
                      "group relative rounded-3xl overflow-hidden glass-panel hover:border-white/30 transition-colors duration-500",
                      isLarge ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
                    )}
                  >
                    <Link href={`/menu/${item.id}`} className="absolute inset-0 z-20">
                      <span className="sr-only">View {item.name}</span>
                    </Link>

                    {/* Image Background */}
                    <div className="absolute inset-0 bg-[#1A1A1A]">
                      <img 
                        src={item.imagePlaceholder} 
                        alt={item.name}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10 pointer-events-none">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className={cn(
                            "font-bold text-white leading-tight",
                            isLarge ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                          )}>
                            {item.name}
                          </h4>
                          <span className="text-[#FF5A36] font-bold whitespace-nowrap bg-[#FF5A36]/10 px-3 py-1 rounded-full text-sm">
                            Rs. {item.priceNPR}
                          </span>
                        </div>
                        
                        <p className={cn(
                          "text-white/70 font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100",
                          isLarge ? "text-lg max-w-md" : "text-sm"
                        )}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
