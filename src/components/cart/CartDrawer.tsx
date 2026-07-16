"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { cn } from '../../lib/utils';

export default function CartDrawer() {
  const { items, isCartOpen, toggleCart, updateQuantity, getCartTotal } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:max-w-md bg-[#111111]/95 backdrop-blur-2xl border-l border-white/10 z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2 sm:gap-3">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#00E5FF]" />
                Your Order
              </h2>
              <button 
                onClick={toggleCart}
                className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/40 space-y-3 sm:space-y-4">
                  <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 opacity-20" />
                  <p className="font-medium text-base sm:text-lg">Your cart is empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden shadow-sm hover:border-white/20 transition-all"
                  >
                    {/* Item Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#1A1A1A]">
                      <img 
                        src={item.imagePlaceholder} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-bold text-white text-sm sm:text-base line-clamp-1">{item.name}</h3>
                        <p className="text-[#FF5A36] font-medium mt-1">Rs. {item.priceNPR}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-[#111111]/50 rounded-full border border-white/5 w-fit p-1 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="w-6 sm:w-8 text-center text-sm font-medium text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button 
                      onClick={() => updateQuantity(item.id, 0)}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 text-white/30 hover:text-[#FF5A36] hover:bg-[#FF5A36]/10 rounded-full transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-white/10 bg-white/5 space-y-4">
                <div className="flex items-center justify-between text-[#F8F9FA]">
                  <span className="font-medium text-white/70">Subtotal</span>
                  <span className="text-xl font-bold">Rs. {getCartTotal()}</span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-[#FF5A36] to-[#00E5FF] text-white rounded-full font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,90,54,0.4)] transition-all active:scale-95">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
