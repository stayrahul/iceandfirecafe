"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '../../store/useCartStore';

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
        className="fixed top-0 left-0 w-full z-40 glass-panel border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white flex items-center gap-2">
            Ice <span className="text-[#00E5FF]">&amp;</span> <span className="text-[#FF5A36]">Fire</span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/menu" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
                Menu
              </Link>
              <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
                Our Story
              </Link>
              <Link href="/visit" className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider">
                Visit Us
              </Link>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="hidden md:block px-5 py-2 bg-gradient-to-r from-[#FF5A36] to-[#00E5FF] text-white text-sm font-bold rounded-full uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,90,54,0.5)] transition-shadow">
                Reservations
              </button>
              <button 
                onClick={toggleCart}
                className="relative p-2 text-white hover:text-[#00E5FF] transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                {itemCount > 0 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#FF5A36] text-white text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-[#111111]"
                  >
                    {itemCount}
                  </motion.div>
                )}
              </button>

              <button 
                className="md:hidden p-2 text-white"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-4 sm:p-6 h-16 sm:h-20 items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white rounded-full bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-[#00E5FF] transition-colors">
                Menu
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-[#00E5FF] transition-colors">
                Our Story
              </Link>
              <Link href="/visit" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-serif text-white hover:text-[#00E5FF] transition-colors">
                Visit Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
