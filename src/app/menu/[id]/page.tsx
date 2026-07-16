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
      <div className="min-h-screen bg-[#111111] flex items-center justify-center text-white">
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
    <div className="min-h-screen bg-[#111111] pt-32 pb-24 px-6 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-24 max-w-7xl mx-auto">
      
      {/* Ambient Blobs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-bl from-[#00E5FF]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-tr from-[#FF5A36]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Left Column: Image */}
      <div className="lg:w-1/2 relative h-[40vh] md:h-[50vh] lg:h-[70vh] z-10">
        <Link 
          href="/" 
          className="absolute -top-12 left-0 text-white/60 hover:text-white flex items-center gap-2 transition-colors z-30 font-medium uppercase tracking-wider text-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Menu
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full rounded-3xl overflow-hidden glass-panel group shadow-2xl"
        >
          <img 
            src={item.imagePlaceholder} 
            alt={item.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
        </motion.div>
      </div>

      {/* Right Column: Details */}
      <div className="lg:w-1/2 flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/5">
              {item.category}
            </span>
            {item.isSpicy && (
              <span className="px-3 py-1 bg-[#FF5A36]/20 text-[#FF5A36] text-xs font-bold uppercase tracking-widest rounded-full border border-[#FF5A36]/20">
                Spicy 🔥
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            {item.name}
          </h1>
          
          <p className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] to-[#00E5FF] mb-8">
            Rs. {item.priceNPR}
          </p>
          
          <p className="text-white/60 text-lg leading-relaxed font-light mb-12">
            {item.description}
          </p>
        </motion.div>

        {/* Action Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-center"
        >
          {/* Quantity Selector */}
          <div className="flex items-center bg-[#111111]/50 rounded-full border border-white/10 p-1 w-full sm:w-auto">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="w-12 text-center text-xl font-medium text-white">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            disabled={isAdded}
            className={cn(
              "flex-1 w-full h-14 rounded-full font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden",
              isAdded 
                ? "bg-[#00E5FF] text-[#111111]" 
                : "bg-gradient-to-r from-[#FF5A36] to-[#00E5FF] text-white hover:shadow-[0_0_20px_rgba(255,90,54,0.4)]"
            )}
          >
            <span className="relative z-10">{isAdded ? 'Added to Cart ✓' : 'Add to Cart'}</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
