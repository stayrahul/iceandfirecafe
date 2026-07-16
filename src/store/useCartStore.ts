import { create } from 'zustand';
import { CartItem, MenuItem } from '../types';

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (item: MenuItem, quantity: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isCartOpen: false,

  addItem: (item, quantity) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      return {
        items: state.items.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      };
    }
    return { items: [...state.items, { ...item, quantity }] };
  }),

  removeItem: (itemId) => set((state) => ({
    items: state.items.filter(i => i.id !== itemId)
  })),

  updateQuantity: (itemId, quantity) => set((state) => ({
    items: state.items.map(i => 
      i.id === itemId ? { ...i, quantity: Math.max(0, quantity) } : i
    ).filter(i => i.quantity > 0)
  })),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  clearCart: () => set({ items: [] }),

  getCartTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.priceNPR * item.quantity), 0);
  }
}));
