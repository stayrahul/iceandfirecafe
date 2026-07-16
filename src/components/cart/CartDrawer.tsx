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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:max-w-md bg-[#FDFBF7] border-l border-[#2C1E16]/10 z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-[#2C1E16]/10 flex items-center justify-between bg-white">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2C1E16] flex items-center gap-2 sm:gap-3">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#C84B31]" />
                Your Order
              </h2>
              <button 
                onClick={toggleCart}
                className="p-2 text-[#2C1E16]/50 hover:text-[#2C1E16] bg-[#2C1E16]/5 hover:bg-[#2C1E16]/10 rounded-full transition-colors"
                aria-label="Close Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-[#2C1E16]/40 space-y-3 sm:space-y-4">
                  <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 opacity-20" />
                  <p className="font-medium text-base sm:text-lg">Your cart is empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-sm border border-[#2C1E16]/10 bg-white relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img 
                      src={item.imagePlaceholder} 
                      alt={item.name} 
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-sm relative z-10"
                    />
                    
                    <div className="flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        <h3 className="text-[#2C1E16] font-serif font-bold line-clamp-1 text-sm sm:text-base">{item.name}</h3>
                        <p className="text-[#C84B31] font-medium text-xs sm:text-sm mt-0.5 sm:mt-1">Rs. {item.priceNPR}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2 sm:mt-4">
                        <div className="flex items-center gap-2 sm:gap-3 bg-[#FDFBF7] rounded-sm p-1 border border-[#2C1E16]/10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 sm:p-1.5 text-[#2C1E16]/60 hover:text-[#C84B31] transition-colors rounded-sm"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <span className="text-[#2C1E16] text-xs sm:text-sm font-bold w-4 sm:w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 sm:p-1.5 text-[#2C1E16]/60 hover:text-[#C84B31] transition-colors rounded-sm"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                        <p className="text-[#2C1E16] font-bold text-sm sm:text-base">
                          Rs. {item.priceNPR * item.quantity}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-[#2C1E16]/10 bg-white space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between text-base sm:text-lg">
                  <span className="text-[#2C1E16]/60 font-medium">Subtotal</span>
                  <span className="text-[#2C1E16] font-bold text-lg sm:text-xl">Rs. {getCartTotal()}</span>
                </div>
                <button className="w-full py-3.5 sm:py-4 rounded-sm bg-[#C84B31] text-white font-bold tracking-widest uppercase text-xs sm:text-sm hover:bg-[#722F2F] transition-colors shadow-lg">
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
