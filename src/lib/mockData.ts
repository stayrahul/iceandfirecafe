import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // FOOD - MOMO, CHOWMEIN, BURGER (The core savory items)
  {
    id: 'chicken-momo',
    name: 'Chicken Mo:Mo',
    description: 'Authentic Nepali steamed dumplings filled with spiced minced chicken, served with our signature tomato-sesame chutney.',
    priceNPR: 180,
    category: 'FOOD',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'veg-chowmein',
    name: 'Veg Chowmein',
    description: 'Wok-tossed noodles with fresh seasonal vegetables and soy-garlic sauce. A classic cafe favorite.',
    priceNPR: 120,
    category: 'FOOD',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1553621043-f607bfbf6640?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    description: 'Crispy fried chicken patty, fresh lettuce, and mayo on a soft toasted bun. Served with a side of fries.',
    priceNPR: 200,
    category: 'FOOD',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop',
  },

  // BEVERAGES - TEA & COFFEE
  {
    id: 'milk-tea',
    name: 'Classic Milk Tea',
    description: 'Strong brewed CTC tea with milk and a hint of cardamom. The perfect companion for any conversation.',
    priceNPR: 30,
    category: 'HOT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1525803377221-4f6ccdaa5133?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'black-coffee',
    name: 'Hot Black Coffee',
    description: 'Freshly brewed strong black coffee to kickstart your day.',
    priceNPR: 60,
    category: 'HOT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop',
  },

  // CAKES - Extensive Cake Menu as per seller description
  {
    id: 'black-forest-cake',
    name: 'Black Forest Cake',
    description: 'Rich chocolate sponge cake layered with whipped cream and cherries.',
    priceNPR: 120,
    category: 'DESSERT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'white-forest-cake',
    name: 'White Forest Cake',
    description: 'Light vanilla sponge cake layered with white chocolate shavings and fresh cream.',
    priceNPR: 130,
    category: 'DESSERT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1561702856-b4ec96854ed8?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'chocolate-truffle-cake',
    name: 'Chocolate Truffle Cake',
    description: 'Dense and decadent chocolate cake covered in a smooth dark truffle ganache.',
    priceNPR: 150,
    category: 'DESSERT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'strawberry-cake',
    name: 'Fresh Strawberry Cake',
    description: 'Soft vanilla sponge filled with fresh strawberry compote and light whipped cream.',
    priceNPR: 140,
    category: 'DESSERT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1558234469-50fc184d1cc9?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'custom-birthday-cake',
    name: 'Custom Birthday Cake (Order)',
    description: 'Beautifully decorated custom cakes for birthdays and special events. Pre-order required.',
    priceNPR: 800,
    category: 'DESSERT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2000&auto=format&fit=crop',
  },

  // SWEETS - Traditional Local Sweets
  {
    id: 'lal-mohan',
    name: 'Lal Mohan (Gulab Jamun)',
    description: 'Deep fried milk dough balls soaked in a glistening sugar syrup. Soft, warm, and sweet.',
    priceNPR: 50,
    category: 'DESSERT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1593701461250-d7b22dfd3a77?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'rasbari',
    name: 'Rasbari (Rasgulla)',
    description: 'Soft, spongy cottage cheese balls soaked in a light, sweet syrup.',
    priceNPR: 60,
    category: 'DESSERT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 'jalebi',
    name: 'Crispy Jalebi',
    description: 'Deep-fried flour batter in circular shapes, soaked in sugar syrup. Crispy and sweet.',
    priceNPR: 40,
    category: 'DESSERT',
    isSpicy: false,
    imagePlaceholder: 'https://images.unsplash.com/photo-1589786742305-f24d19eedbe5?q=80&w=2000&auto=format&fit=crop',
  }
];
