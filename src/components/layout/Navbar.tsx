"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '../../store/useCartStore';
import { BUSINESS_INFO } from '../../lib/constants';

export default function Navbar() {
  const { items, toggleCart } = useCartStore();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="fixed top-0 left-0 w-full z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#2C1E16]/10 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#2C1E16] flex items-center gap-2">
            Ice <span className="text-[#C84B31]">&amp;</span> Fire
          </Link>

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/menu" className="text-sm font-medium text-[#2C1E16]/70 hover:text-[#C84B31] transition-colors uppercase tracking-wider">
                Menu
              </Link>
              <Link href="/about" className="text-sm font-medium text-[#2C1E16]/70 hover:text-[#C84B31] transition-colors uppercase tracking-wider">
                Our Story
              </Link>
              <Link href="/visit" className="text-sm font-medium text-[#2C1E16]/70 hover:text-[#C84B31] transition-colors uppercase tracking-wider">
                Visit Us
              </Link>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="hidden md:block px-5 py-2 bg-[#C84B31] text-[#FDFBF7] text-sm font-medium hover:bg-[#A63A24] transition-colors rounded-sm uppercase tracking-wider">
                Reservations
              </button>
              <button 
                onClick={toggleCart}
                className="relative p-2 text-[#2C1E16] hover:text-[#C84B31] transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                {itemCount > 0 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#C84B31] text-[#FDFBF7] text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-[#FDFBF7]"
                  >
                    {itemCount}
                  </motion.div>
                )}
              </button>
              <button
                className="md:hidden p-2 text-[#2C1E16]"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[45] backdrop-blur-sm md:hidden"
            />
              <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-[#FDFBF7] z-50 flex flex-col p-6 shadow-2xl md:hidden border-l border-[#2C1E16]/10"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#2C1E16]/50 hover:text-[#2C1E16] bg-[#2C1E16]/5 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif font-bold text-[#2C1E16] hover:text-[#C84B31] transition-colors uppercase tracking-widest border-b border-[#2C1E16]/10 pb-4">
                  Menu
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif font-bold text-[#2C1E16] hover:text-[#C84B31] transition-colors uppercase tracking-widest border-b border-[#2C1E16]/10 pb-4">
                  Our Story
                </Link>
                <Link href="/visit" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif font-bold text-[#2C1E16] hover:text-[#C84B31] transition-colors uppercase tracking-widest border-b border-[#2C1E16]/10 pb-4">
                  Visit Us
                </Link>
              </div>
              <button className="w-full py-4 bg-[#C84B31] text-[#FDFBF7] font-medium tracking-widest uppercase text-sm mt-auto transition-colors hover:bg-[#A63A24]">
                Reservations
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
