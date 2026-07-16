export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceNPR: number;
  category: 'HOT' | 'COLD' | 'FOOD' | 'DESSERT';
  isSpicy: boolean;
  imagePlaceholder: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
