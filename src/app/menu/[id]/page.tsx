"use client";

import { use, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { MENU_ITEMS } from '../../../lib/mockData';
import { useCartStore } from '../../../store/useCartStore';
import { cn } from '../../../lib/utils';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const item = MENU_ITEMS.find(item => item.id === id);
  const { addItem, toggleCart } = useCartStore();
  
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Product not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(item, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      toggleCart();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
      {/* Left Column: Image */}
      <div className="lg:w-1/2 relative h-[40vh] md:h-[50vh] lg:h-[70vh]">
        <Link 
          href="/" 
          className="absolute -top-12 left-0 text-[#2C1E16]/60 hover:text-[#C84B31] flex items-center gap-2 transition-colors z-30 font-medium uppercase tracking-wider text-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Menu
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full rounded-sm overflow-hidden border border-[#2C1E16]/5 z-20 group shadow-lg"
        >
          <img 
            src={item.imagePlaceholder} 
            alt={item.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </motion.div>
      </div>

      {/* Right Column: Details & Interaction */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-sm border border-[#2C1E16]/20 text-xs font-bold tracking-[0.2em] uppercase text-[#2C1E16]/70">
              {item.category}
            </span>
            {item.isSpicy && (
              <span className="text-[#C84B31] text-sm font-bold flex items-center gap-1 uppercase tracking-widest">
                🔥 Spicy
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2C1E16] tracking-tight mb-6 leading-tight">
            {item.name}
          </h1>
          
          <p className="text-base sm:text-lg text-[#2C1E16]/70 leading-relaxed mb-8 md:mb-12 font-light">
            {item.description}
          </p>

          <div className="space-y-6 sm:space-y-8 bg-white border border-[#2C1E16]/10 p-6 sm:p-8 rounded-sm shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[#2C1E16]/60 text-base sm:text-lg font-medium">Price</span>
              <span className="text-2xl sm:text-3xl font-bold text-[#C84B31]">Rs. {item.priceNPR}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#2C1E16]/60 text-base sm:text-lg font-medium">Quantity</span>
              <div className="flex items-center gap-4 sm:gap-6 bg-[#FDFBF7] rounded-sm p-1.5 sm:p-2 border border-[#2C1E16]/10">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 sm:p-3 text-[#2C1E16]/60 hover:text-[#C84B31] transition-colors rounded-sm"
                >
                  <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-[#2C1E16] text-lg sm:text-xl font-bold w-6 sm:w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 sm:p-3 text-[#2C1E16]/60 hover:text-[#C84B31] transition-colors rounded-sm"
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-[#2C1E16]/10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-[#2C1E16]/80 text-lg sm:text-xl font-medium">Total</span>
                <span className="text-3xl sm:text-4xl font-bold text-[#2C1E16]">
                  Rs. {item.priceNPR * quantity}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={isAdded}
                className={cn(
                  "w-full py-4 sm:py-5 rounded-sm font-bold text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 sm:gap-3 shadow-lg",
                  isAdded 
                    ? "bg-[#2C1E16] text-[#FDFBF7]" 
                    : "bg-[#C84B31] text-white hover:bg-[#722F2F]"
                )}
              >
                {isAdded ? "Added to Cart" : "Add to Order"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
