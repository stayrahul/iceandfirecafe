"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '../../store/useCartStore';

export default function Navbar() {
  const { items, toggleCart } = useCartStore();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Our Story', href: '/about' },
    { name: 'Visit Us', href: '/visit' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#2C1E16]/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-1' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className={`text-xl sm:text-2xl font-serif font-bold tracking-tight flex items-center gap-2 transition-colors ${scrolled || pathname !== '/' ? 'text-[#2C1E16]' : 'text-[#FDFBF7]'}`}>
            Ice <span className="text-[#C84B31] font-light italic">&amp;</span> Fire
          </Link>

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`text-xs font-bold uppercase tracking-widest relative group transition-colors ${scrolled || pathname !== '/' ? 'text-[#2C1E16]/70 hover:text-[#C84B31]' : 'text-[#FDFBF7]/80 hover:text-[#FDFBF7]'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1.5 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${scrolled || pathname !== '/' ? 'bg-[#C84B31]' : 'bg-[#FDFBF7]'}`} />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3 sm:gap-6">
              <button className={`hidden md:block px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                scrolled || pathname !== '/' 
                  ? 'bg-[#C84B31] text-[#FDFBF7] hover:bg-[#A63A24] shadow-[0_4px_20px_rgba(200,75,49,0.3)]' 
                  : 'bg-[#FDFBF7] text-[#2C1E16] hover:bg-white shadow-[0_4px_20px_rgba(255,255,255,0.2)]'
              }`}>
                Reservations
              </button>
              
              <button 
                onClick={toggleCart}
                className={`relative p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${scrolled || pathname !== '/' ? 'text-[#2C1E16] hover:text-[#C84B31]' : 'text-[#FDFBF7] hover:text-white'}`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                {itemCount > 0 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#C84B31] text-[#FDFBF7] text-[10px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-lg"
                  >
                    {itemCount}
                  </motion.div>
                )}
              </button>
              
              <button
                className={`md:hidden p-2 transition-colors ${scrolled || pathname !== '/' ? 'text-[#2C1E16]' : 'text-[#FDFBF7]'}`}
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
              className="fixed inset-0 bg-[#2C1E16]/80 z-[45] backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FDFBF7] z-50 flex flex-col p-8 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-serif font-bold tracking-tight text-[#2C1E16]">
                  Ice <span className="text-[#C84B31] font-light italic">&amp;</span> Fire
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#2C1E16]/50 hover:text-[#C84B31] bg-[#2C1E16]/5 rounded-full transition-all hover:scale-105 active:scale-95">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="text-2xl font-serif font-bold text-[#2C1E16] hover:text-[#C84B31] transition-colors tracking-wide flex items-center justify-between border-b border-[#2C1E16]/10 pb-4 group"
                    >
                      {link.name}
                      <span className="text-[#C84B31] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <button className="w-full py-4 bg-[#C84B31] text-[#FDFBF7] font-bold tracking-[0.2em] uppercase text-xs rounded-full mt-auto transition-all hover:bg-[#A63A24] hover:shadow-[0_4px_20px_rgba(200,75,49,0.3)] hover:scale-105 active:scale-95">
                Reservations
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
